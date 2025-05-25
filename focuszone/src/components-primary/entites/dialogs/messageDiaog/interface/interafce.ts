export interface Message {
    id: number
    userId: string
    cafeId: number
    content: string
    createdAt: string
    updatedAt: string
}

export interface MessageDialogProps {
    cafeId: number
    ratingNow: number[]
    theme?: string
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