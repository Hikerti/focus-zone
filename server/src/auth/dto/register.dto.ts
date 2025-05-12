import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class RegisterDto {
    
        @IsNotEmpty({message: 'Поле является обязательным'})
        @IsString({message: "Почта должна быть в формате строки"})
        @IsEmail({}, {message: "Введите запрос в формате email"})
        email: string
    
        @IsNotEmpty({message: 'Поле является обязательным'})
        @IsString({message: "Пароль должно быть в формате строки"})
        @MinLength(8, {message: "Пароль должен содержать минимум 8 симвалов"})
        password: string
    
        @IsString({message: "Пароль должно быть в формате строки"})
        adress: string
    
        @Matches(/^\+?\d{10,15}$/)
        @IsString({message: "Пароль должно быть в формате строки"})
        phone: string
    
        @IsNotEmpty({message: 'Поле является обязательным'})
        @IsString({message: "Пароль должно быть в формате строки"})
        name: string
    
        @IsNotEmpty({message: 'Поле является обязательным'})
        @IsString({message: "Пароль должно быть в формате строки"})
        surname: string
    
        @IsNotEmpty({message: 'Поле является обязательным'})
        @IsString({message: "Пароль должно быть в формате строки"})
        login: string
    
        @MaxLength(200, {message: 'Описание не может быть длиннее 200 симвалов'})
        @IsString({message: "Пароль должно быть в формате строки"})
        description: string
}