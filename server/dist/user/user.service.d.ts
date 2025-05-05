import { PrismaService } from 'src/prisma/prisma.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
}
