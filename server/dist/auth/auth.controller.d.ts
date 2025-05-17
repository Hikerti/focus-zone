import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(res: Response, dto: UserCreateDto): Promise<{
        user: import("./interface/interface").User;
        accessToken: string;
    }>;
    login(res: Response, dto: LoginDto): Promise<{
        user: import("./interface/interface").User;
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<void>;
    refresh(req: Request, res: Response): Promise<{
        user: import("./interface/interface").User;
        accessToken: string;
    }>;
    me(req: Request): Promise<{
        user: {
            description: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
            adress: string | null;
            phone: string | null;
            surname: string;
            login: string;
        };
    }>;
}
