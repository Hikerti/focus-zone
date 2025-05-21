import { PlacesService } from './places.service';
import { CreatePlacesDto } from "src/places/dto/CreatePlaces.dto";
import { UpdatePlacesDto } from "src/places/dto/UpdatePlaces.dto";
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
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
    getPlacesById(id: string): Promise<{
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
    filterPlaces(filter: string, page: string, limit: string): Promise<{
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
    update(dto: UpdatePlacesDto, id: string): Promise<{
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
    delete(id: string): Promise<{
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
}
