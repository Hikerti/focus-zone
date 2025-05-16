import { PrismaService } from "../prisma/prisma.service";
import { CreateDescountDto } from "./dto/CreateDescount.dto";
import { UpdateDescountDto } from "./dto/UpdateDescount.dto";
export declare class DiscountsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDiscount(): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    getDiscountUserId(userId: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    getDiscountCafeId(cafeId: number): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    createDiscounts(dto: CreateDescountDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
    updateDiscounts(id: number, dto: UpdateDescountDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
    deleteDiscount(id: number): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
}
