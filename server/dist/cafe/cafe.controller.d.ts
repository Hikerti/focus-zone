import { CafeService } from './cafe.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';
export declare class CafeController {
    private readonly cafeService;
    constructor(cafeService: CafeService);
    getCafe(): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeById(id: string): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    filter_card(filter: string, page: string, limit: string): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[] | undefined>;
    getCafePage(limit: number, page: number): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeLength(dto: UpdateCartDto): Promise<number>;
    createCafe(dto: CreateCartDto): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(dto: UpdateCartDto, id: string): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        title: string;
        description: string | null;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
