export interface Message {
    id: number
    userId: string
    cafeId: number
    content: string
    createdAt: Date
    updatedAt: Date
}

export interface MessageDialogProps {
    cafeId: number
    ratingNow: number[]
}

export interface UseCreateMessageProps {
    cafeId: number
    message: string | undefined
}

export interface UseRatingProps {
    ratingNow: number[]
    rating: number
    cafeId: number
}