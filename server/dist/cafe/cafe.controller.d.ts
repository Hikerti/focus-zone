import { CafeService } from './cafe.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';
export declare class CafeController {
    private readonly cafeService;
    constructor(cafeService: CafeService);
    getCafe(): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeById(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    filter_card(filter: string, page: string, limit: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[] | undefined>;
    getCafePage(limit: number, page: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeLength(dto: UpdateCartDto): Promise<number>;
    createCafe(dto: CreateCartDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(dto: UpdateCartDto, id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        rating: string;
        favourites: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
