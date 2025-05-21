import { UserService } from './user.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: UserCreateDto): Promise<{
        email: string;
        password: string;
        adress: string | null;
        phone: string | null;
        name: string;
        surname: string;
        login: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getUserById(id: string): Promise<{
        email: string;
        password: string;
        adress: string | null;
        phone: string | null;
        name: string;
        surname: string;
        login: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getUserByEmail(email: string): Promise<{
        email: string;
        password: string;
        adress: string | null;
        phone: string | null;
        name: string;
        surname: string;
        login: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getUsers(): Promise<{
        email: string;
        password: string;
        adress: string | null;
        phone: string | null;
        name: string;
        surname: string;
        login: string;
        description: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
