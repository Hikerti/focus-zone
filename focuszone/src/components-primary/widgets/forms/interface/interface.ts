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