import { UserService } from './user.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: UserCreateDto): Promise<{
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
    getUserById(id: string): Promise<{
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
    } | null>;
    getUserByEmail(email: string): Promise<{
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
    } | null>;
    getUsers(): Promise<{
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
    }[]>;
}
