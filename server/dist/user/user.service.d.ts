import { UserCreateDto } from './dto/UserCreateDto.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
}
