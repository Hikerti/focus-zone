import { IsEmail, IsString, MinLength } from "class-validator"

export class LoginDto {
    
    @IsString({message: "Почта должна быть в формате строки"})
    @IsEmail({}, {message: "Введите запрос в формате email"})
    email: string

    @IsString({message: "Пароль должн быть в формате строки"})
    @MinLength(8, {message: "Пароль должен содержать минимум 8 симвалов"})
    password: string
}