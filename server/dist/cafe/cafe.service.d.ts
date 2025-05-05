import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';
export declare class CafeService {
    private prisma;
    constructor(prisma: PrismaService);
    getCardCafe(): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createCardCafe(dto: CreateCartDto): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateField(id: number, dto: Partial<UpdateCartDto>): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteCardCafe(id: number): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
