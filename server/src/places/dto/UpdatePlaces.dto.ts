import {IsBoolean, IsOptional, IsString} from "class-validator"

export class UpdatePlacesDto {
    @IsString({message: "Поле title должно быть строкой"})
    @IsOptional()
    title?:   string
    
    @IsString({message: "Поле description должно быть строкой"})
    @IsOptional()
    description?: string
    
    @IsString({message: "Поле address должно быть строкой"})
    @IsOptional()
    address?: string
    
    @IsString({message: "Поле imageUrl должно быть строкой"})
    @IsOptional()
    imageUrl?: string
    
    @IsBoolean({message: "Поле favourites должно быть boolean"})
    @IsOptional()
    favourites?: boolean

    @IsOptional()
    rating?: number[]

    @IsString({message: "Поле locationLat должно быть строкой"})
    @IsOptional()
    locationLat?: string

    @IsString({message: "Поле locationLng должно быть строкой"})
    @IsOptional()
    locationLng?: string
}