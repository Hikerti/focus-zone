import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from "./dto/CreateDescount.dto";
import { UpdateDescountDto } from "./dto/UpdateDescount.dto";
export declare class DiscountsController {
    private readonly discountsService;
    constructor(discountsService: DiscountsService);
    getDiscount(): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    getDiscountUserId(user_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    getDiscountCafeId(cafe_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }[]>;
    createDiscounts(discountDto: CreateDiscountDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
    updateDiscounts(updateDto: UpdateDescountDto, discount_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
    deleteDiscount(discount_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        logo: string;
        title: string;
    }>;
}
