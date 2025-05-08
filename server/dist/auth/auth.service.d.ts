import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
export declare class AuthService {
    private userService;
    private prisma;
    private jwt;
    private config;
    constructor(userService: UserService, prisma: PrismaService, jwt: JwtService, config: ConfigService);
    register(req: Request, dto: UserCreateDto): Promise<unknown>;
    login(req: Request, dto: LoginDto): Promise<unknown>;
    logout(req: Request, res: Response): Promise<void>;
    private saveSeccion;
}
