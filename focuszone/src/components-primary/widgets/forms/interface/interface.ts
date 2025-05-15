import {UserFullData} from "@/helpers/interface/interface/interface.ts";

export interface UserRegistration {
    name: string;
    surname: string
    phone: string
    password: string;
    login: string
    email: string;
    description: string
    adress: string
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserData {
    user: UserFullData;
    accessToken: string
}