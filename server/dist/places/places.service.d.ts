import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlacesDto } from './dto/CreatePlaces.dto';
import { UpdatePlacesDto } from './dto/UpdatePlaces.dto';
export declare class PlacesService {
    private prisma;
    constructor(prisma: PrismaService);
    getPlaces(): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }[]>;
    getPlacesById(id: number): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    } | null>;
    createPlaces(dto: CreatePlacesDto): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }>;
    updateField(id: number, dto: Partial<UpdatePlacesDto>): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }>;
    deletePlaces(id: number): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }>;
    filterPlaces(filter: string, limit: number, page: number): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }[] | undefined>;
    getPlacesLimit(limit: number, page: number): Promise<{
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        address: string;
        imageUrl: string | null;
        favourites: boolean;
        rating: number[];
        locationLat: string;
        locationLng: string;
    }[]>;
    getPlacesLength(dto: UpdatePlacesDto): Promise<number>;
}
