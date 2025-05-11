import {IsInt, IsString, MaxLength} from "class-validator";

export class CreateMessageDto {
    @IsString({message: 'userId должен быть строкой'})
    userId: string

    @IsInt({message: 'cafeId должен быть строкой'})
    cafeId: number

    @IsString({message: 'content должен быть строкой'})
    @MaxLength(300, {message: 'Длинна content не должен превышать 300 символов'})
    content: string
}