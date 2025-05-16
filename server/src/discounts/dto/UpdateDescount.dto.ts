import {IsInt, IsOptional, IsString} from "class-validator";

export class UpdateDescountDto {

    @IsString({message: 'Поле userId должно быть строкой'})
    @IsOptional()
    userId?: string

    @IsOptional()
    @IsInt({message: 'Поле cafeId должно быть числом'})
    cafeId?: number

    @IsOptional()
    @IsString({message: 'Поле url должно быть строкой'})
    url?: string

    @IsOptional()
    @IsString({message: 'Поле logo должно быть строкой'})
    logo?: string

    @IsOptional()
    @IsString({message: 'Поле title должно быть строкой'})
    title?: string

    @IsOptional()
    @IsString({message: 'Поле description должно быть строкой'})
    description?: string
}