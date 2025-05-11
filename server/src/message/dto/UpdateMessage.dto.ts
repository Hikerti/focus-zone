import {IsString, MaxLength, IsOptional, IsInt} from "class-validator";

export class UpdateMessageDto {
    @IsString({message: 'userId должен быть строкой'})
    @IsOptional()
    userId?: string

    @IsInt({message: 'cafeId должен быть строкой'})
    @IsOptional()
    cafeId?: number

    @IsString({message: 'content должен быть строкой'})
    @MaxLength(300, {message: 'Длинна content не должен превышать 300 символов'})
    @IsOptional()
    content?: string
}