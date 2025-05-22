import { PrismaService } from "../prisma/prisma.service";
import { CreateDiscountDto } from "./dto/CreateDescount.dto";
import { UpdateDescountDto } from "./dto/UpdateDescount.dto";
export declare class DiscountsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDiscount(): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    getDiscountUserId(userId: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    getDiscountCafeId(cafeId: number): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    createDiscounts(dto: CreateDiscountDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
    updateDiscounts(id: number, dto: UpdateDescountDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
    deleteDiscount(id: number): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
}
