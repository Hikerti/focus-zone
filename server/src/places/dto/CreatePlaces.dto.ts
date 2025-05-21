import {IsNumber, IsOptional, IsString} from 'class-validator';

export class CreatePlacesDto {

    @IsString({message: "Поле title должно быть строкой"})
    title:   string

    @IsString({message: "Поле description должно быть строкой"})
    @IsOptional()
    description?: string

    @IsString({message: "Поле address должно быть строкой"})
    address: string

    @IsString({message: "Поле imageUrl должно быть строкой"})
    @IsOptional()
    imageUrl?: string

    @IsString({message: "Поле favourites должно быть строкой"})
    @IsOptional()
    favourites?: boolean

    @IsOptional()
    rating?: number[]

    @IsString({message: "Поле locationLat должно быть строкой"})
    locationLat: string

    @IsString({message: "Поле locationLng должно быть строкой"})
    locationLng: string
}