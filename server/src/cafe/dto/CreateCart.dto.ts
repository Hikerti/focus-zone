import { IsOptional, IsString } from 'class-validator';

export class CreateCartDto {

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
}