import { PlacesService } from './places.service';
import { CreatePlacesDto } from "./dto/CreatePlaces.dto";
import { UpdatePlacesDto } from "./dto/UpdatePlaces.dto";
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
    updateField(dto: UpdatePlacesDto, id: string): Promise<{
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
    deletePlaces(id: string): Promise<{
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
