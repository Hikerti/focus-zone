import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(req: Request, res: Response, dto: UserCreateDto): Promise<{
        user: import("./interface/interface").User;
        accessToken: string;
    }>;
    login(dto: LoginDto, res: Response, req: Request): Promise<{
        user: import("./interface/interface").User;
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
}
