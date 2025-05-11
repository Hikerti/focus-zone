export interface Card {
    id: number
    style: string
    title: string
    address: string
    imageUrl: string
    description: string
    favourites: boolean
    rating: string
    createdAt: string
}

export interface CardPut {
    id?: number
    style?: string
    title?: string
    address?: string
    imageUrl?: string
    rating?: string
    description?: string
    favourites?: boolean
    createdAt?: string
}