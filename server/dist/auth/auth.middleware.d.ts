import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
import { Redis } from 'ioredis';
export declare class AuthMiddleware implements NestMiddleware {
    private readonly jwt;
    private readonly config;
    private readonly userService;
    private readonly redisClient;
    constructor(jwt: JwtService, config: ConfigService, userService: UserService, redisClient: Redis);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
