import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce";

export interface CardCafeProps {
    id: number
    style?: string
    title: string
    adress: string
    imageUrl: string
    description?: string
    favourites: boolean
    rating: number[]
    createdAt?: string
    locationLat: string
    locationLng: string
    showArrow: boolean
}

export interface useUpdateFavouriteFunction {
    id?: number
    favourites: boolean
}

export interface SearchCardProps {
    id: number,
    title: string,
    rating: number[],
    imageUrl: string,
}

export interface MessageCardProps {
    message: Message;
}