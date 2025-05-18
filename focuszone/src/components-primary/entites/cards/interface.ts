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
    id?: string
    favourites: boolean
}