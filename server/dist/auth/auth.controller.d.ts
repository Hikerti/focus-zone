import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { UserCreateDto } from 'src/user/dto/UserCreateDto.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(req: Request, dto: UserCreateDto): Promise<unknown>;
    login(dto: LoginDto, req: Request): Promise<{
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
    }>;
    logout(req: Request, res: Response): Promise<void>;
}
