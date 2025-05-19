import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { User } from './interface/interface';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
import Redis from 'ioredis';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwt;
    private config;
    private redisClient;
    private readonly jwtService;
    constructor(userService: UserService, jwt: JwtService, config: ConfigService, redisClient: Redis, jwtService: JwtService);
    private cookieOptions;
    private tokenGenerate;
    private saveSession;
    register(res: Response, dto: UserCreateDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    login(res: Response, dto: LoginDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
    refreshToken(req: Request, res: Response): Promise<{
        user: User;
        accessToken: string;
    }>;
    me(req: Request): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            adress: string | null;
            phone: string | null;
            name: string;
            surname: string;
            login: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
