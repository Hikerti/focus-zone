import {UserFullData} from "@/helpers/interface/interface.ts";

export interface UserRegistrationUser {
    name: string;
    surname: string
    phone: string
    password: string;
    login: string
    email: string;
    description: string
    adress: string
}

export interface UserRegistrationSet extends UserRegistrationUser{
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserRegistrationData {
   user: UserRegistrationSet;
   accessToken: string
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserData {
    user: UserFullData;
    accessToken: string
}