import {IsInt, IsNotEmpty, IsString} from "class-validator";

export class CreateAchievementDto {

    @IsString({message: 'Поле userId должно быть строкой'})
    @IsNotEmpty({message: 'Поле является обязательным'})
    userId: string

    @IsNotEmpty({message: 'Поле является обязательным'})
    @IsInt({message: 'Поле cafeId должно быть числом'})
    cafeId: number

    @IsNotEmpty({message: 'Поле является обязательным'})
    @IsString({message: 'Поле url должно быть строкой'})
    url: string

    @IsNotEmpty({message: 'Поле является обязательным'})
    @IsString({message: 'Поле title должно быть строкой'})
    title: string

    @IsNotEmpty({message: 'Поле является обязательным'})
    @IsString({message: 'Поле description должно быть строкой'})
    description: string
}