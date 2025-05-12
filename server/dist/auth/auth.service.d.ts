import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Request, Response } from 'express';
import { User } from './interface/interface';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
export declare class AuthService {
    private userService;
    private jwt;
    private config;
    constructor(userService: UserService, jwt: JwtService, config: ConfigService);
    register(res: Response, req: Request, dto: UserCreateDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    login(res: Response, req: Request, dto: LoginDto): Promise<{
        user: User;
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
    private saveSession;
}
