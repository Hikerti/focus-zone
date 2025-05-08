import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { Request, Response } from 'express';
import { User } from './interface/interface';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';

@Injectable()
export class AuthService {
    constructor (
        private userService: UserService,
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) {}
    public async register(req: Request, dto: UserCreateDto) {
        const isExist = await this.userService.getUserByEmail(dto.email)
        
        if (isExist) {
            throw new ConflictException("Введите другой email, этот email уже зареги")
        }

        const user = await this.userService.create(
            dto
        )

        const payload = { sub: user.id, email: user.email }
        const accessToken = this.jwt.sign(payload);

        return this.saveSeccion(req, accessToken, user)

    }

    public async login(req: Request, dto: LoginDto) {
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
        return this.saveSeccion(req, accessToken, user)
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
          });
        });
      }
    private saveSeccion(req: Request, accessToken, user: User) {
        return new Promise((res, reject) => {
            req.session.userId = user.id
            req.session.jwt = accessToken
            req.session.save(err => {
                if(err) {
                    return reject(
                        new InternalServerErrorException('Не удалось сохранить сессию')
                    )
                }
                res({user})
                res({accessToken})
            })
        })
    }
}
