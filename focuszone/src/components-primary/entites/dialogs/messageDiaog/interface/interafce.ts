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
}