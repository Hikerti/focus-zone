import {ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { User } from './interface/interface';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
import { CookieOptions } from 'express';
// import { RedisService } from 'src/redis/redis.service';
// import { Redis } from 'ioredis';

@Injectable()
export class AuthService {
    constructor (
        private userService: UserService,
        private jwt: JwtService,
        private config: ConfigService,
        // private redisService: RedisService,
    ) {}
    public async register(res: Response, req: Request, dto: UserCreateDto) {
        const isExist = await this.userService.getUserByEmail(dto.email)
        
        if (isExist) {
            throw new ConflictException("Введите другой email, этот email уже зареги")
        }

        const user = await this.userService.create(
            dto
        )

        const payload = { sub: user.id, email: user.email }
        const accessToken = this.jwt.sign(payload);

        return this.saveSession(res, req, accessToken, user)

    }

    public async login(res: Response,req: Request, dto: LoginDto) {
        const user = await this.userService.getUserByEmail(dto.email)

        if (!user || !user.password) {
            throw new NotFoundException('Пользователь не найден')
        }

        const isValidPassword = await bcrypt.compare(dto.password, user.password)

        if (!isValidPassword) {
            throw new NotFoundException('Неверный пароль')
        }

        const payload = { sub: user.id, email: user.email }
        const accessToken = this.jwt.sign(payload);
        return this.saveSession(res, req, accessToken, user)
    }

    public async logout(req: Request, res: Response): Promise<void> {
        return new Promise((resolve, reject) => {
          req.session.destroy((err) => {
            if (err) {
              return reject(
                new InternalServerErrorException('Не удалось завершить сессию')
              );
            }
            console.log('Session destroyed:', req.sessionID);

            res.clearCookie(this.config.getOrThrow<string>('SESSION_NAME'), { path: '/' });
            res.status(200).json({ message: 'Сессия завершена'});
            return resolve();
          });
        });
      }

    // public async authenticate(req: Request, res: Response): Promise<void> {
    //     try {
    //         const { userId, jwt: jwtFromCookie } = req.cookies;
    //
    //         if (!userId || !jwtFromCookie) {
    //             throw new UnauthorizedException('Не авторизован');
    //         }
    //
    //         const redisClient: Redis = this.redisService.getRedisClient();
    //
    //         const sessionData = await redisClient.get(userId);
    //
    //         if (!sessionData) {
    //             throw new UnauthorizedException('Сессия не найдена');
    //         }
    //
    //         const userSession = JSON.parse(sessionData);
    //
    //         if (userSession.jwt !== jwtFromCookie) {
    //             throw new UnauthorizedException('Неверный токен');
    //         }
    //             try {
    //                 const decoded = this.jwt.verify(jwtFromCookie, this.config.get('JWT_SECRET'));
    //                 res.status(200).json({ user: userSession.user, message: `Аутентификация успешна ${decoded}` });
    //             } catch (e) {
    //                 throw new UnauthorizedException('Неверный JWT токен');
    //             }
    //     } catch (e) {
    //         throw new InternalServerErrorException('Пользователь не смог авторизироваться')
    //         console.error(e);
    //     }
    // }

    private async saveSession(res: Response, req: Request, accessToken: string, user: User): Promise<{ user: User, accessToken: string}> {
        try {
            const cookieOptions: CookieOptions = {
                httpOnly: true,
                secure: this.config.getOrThrow('USER_SECURE') === 'true',
                sameSite: 'none',
                maxAge: 24 * 60 * 60 * 1000,
                path: '/',
            };
            return new Promise((resolve, reject) => {
                res.cookie('jwt', accessToken, cookieOptions);
                res.cookie('userId', user.id.toString(), { ...cookieOptions, httpOnly: false });

                req.session.userId = user.id
                req.session.jwt = accessToken
                req.session.save((err) => {
                    if(err) {
                        return reject(
                          new InternalServerErrorException(
                            'Не удалось сохранить сессию',
                          ),
                        );
                    }
                    resolve({ user, accessToken});
                })
            })
        } catch (error) {
            res.status(400).json({ error: 'Ошибка при сохранении сессии' })
            throw error;
        }
    }
}
