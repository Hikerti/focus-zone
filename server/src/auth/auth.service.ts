import {
    ConflictException, Inject,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { User } from './interface/interface';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
import { CookieOptions } from 'express';
import Redis from 'ioredis';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwt: JwtService,
        private config: ConfigService,
        @Inject('REDIS_CLIENT')
        private redisClient: Redis,
        private readonly jwtService: JwtService
    ) {}

    private cookieOptions: CookieOptions = {
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        path: '/'
    };

    private async tokenGenerate(payload: { sub: string; email: string }) {
        const accessToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_SECRET'),
            expiresIn: '15m',
        });

        const refreshToken = this.jwt.sign(payload, {
            secret: this.config.get('JWT_REFRESH_SECRET'),
            expiresIn: '7d',
        });

        return { accessToken, refreshToken };
    }

    private async saveSession(
        res: Response,
        accessToken: string,
        refreshToken: string,
        user: User,
    ): Promise<{ user: User; accessToken: string }> {
        await this.redisClient.set(user.id.toString(), refreshToken, 'EX', 7 * 24 * 60 * 60);

        res.cookie('accessToken', accessToken, {
            ...this.cookieOptions,
            maxAge: 15 * 60 * 1000,
        });

        res.cookie('refreshToken', refreshToken, {
            ...this.cookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie('userId', user.id.toString(), {
            ...this.cookieOptions,
            httpOnly: false,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return { user, accessToken };
    }

    public async register(res: Response, dto: UserCreateDto) {
        const isExist = await this.userService.getUserByEmail(dto.email);

        if (isExist) {
            throw new ConflictException('Введите другой email, этот email уже зарегистрирован');
        }

        const user = await this.userService.create(dto);
        const payload = { sub: user.id, email: user.email };

        const { accessToken, refreshToken } = await this.tokenGenerate(payload);
        return this.saveSession(res, accessToken, refreshToken, user);
    }

    public async login(res: Response, dto: LoginDto) {
        const user = await this.userService.getUserByEmail(dto.email);

        if (!user || !user.password) {
            throw new NotFoundException('Пользователь не найден');
        }

        const isValidPassword = await bcrypt.compare(dto.password, user.password);

        if (!isValidPassword) {
            throw new NotFoundException('Неверный пароль');
        }

        const payload = { sub: user.id, email: user.email };
        const { accessToken, refreshToken } = await this.tokenGenerate(payload);

        return this.saveSession(res, accessToken, refreshToken, user);
    }

    public async logout(req: Request, res: Response): Promise<void> {
        const accessToken = req.cookies['accessToken'];

        if (accessToken) {
            await this.redisClient.del(accessToken.toString());
        }

        res.clearCookie('accessToken', { httpOnly: true, path: '/' });
        res.clearCookie('refreshToken', { httpOnly: true, path: '/' });
        res.clearCookie('userId', { path: '/' });

        res.status(200).json({ message: 'Вы вышли из системы' });
    }

    public async refreshToken(req: Request, res: Response) {
        const { refreshToken, userId } = req.cookies;

        if (!refreshToken || !userId) {
            throw new UnauthorizedException('Нет токена');
        }

        const storedToken = await this.redisClient.get(userId);
        if (!storedToken || storedToken !== refreshToken) {
            throw new UnauthorizedException('Неверный токен');
        }

        try {
            const user = await this.userService.getUserById(userId);
            if (!user) {
                throw new UnauthorizedException('Пользователя не существует');
            }

            const payload = { sub: user.id, email: user.email };
            const { accessToken, refreshToken: newRefreshToken } = await this.tokenGenerate(payload);

            return this.saveSession(res, accessToken, newRefreshToken, user);
        } catch (err) {
            throw new UnauthorizedException('Невалидный refreshToken');
        }
    }

    public async me(req: Request) {
        const { accessToken, userId } = req.cookies;
        if (!accessToken || !userId) throw new UnauthorizedException();

        try {
            const decoded = this.jwtService.verify(accessToken, { secret: this.config.get('JWT_SECRET') });
            if (decoded.sub.toString() !== userId) throw new UnauthorizedException();

            const user = await this.userService.getUserById(userId);
            if (!user) throw new UnauthorizedException();

            return { user };
        } catch {
            throw new UnauthorizedException();
        }
    }
}
