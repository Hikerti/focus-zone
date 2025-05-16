import { DiscountsService } from './discounts.service';
import { CreateDescountDto } from "./dto/CreateDescount.dto";
import { UpdateDescountDto } from "./dto/UpdateDescount.dto";
export declare class DiscountsController {
    private readonly discountsService;
    constructor(discountsService: DiscountsService);
    getDiscount(): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    getDiscountUserId(user_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    getDiscountCafeId(cafe_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }[]>;
    createDiscount(discountDto: CreateDescountDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
    updateDiscount(updateDto: UpdateDescountDto, discount_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
    deleteDiscount(discount_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
    }>;
}
