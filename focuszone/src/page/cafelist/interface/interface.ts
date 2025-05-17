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
    locationLat: string
    locationLng: string
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
    locationLat?: string
    locationLng?: string
}

export interface useCafeGetProps {
    cards: Card[]
    totalPage: number
    page: number
    limit: number
    filter: string
    setCards: (cards: Card[]) => void
    setTotalPage: (total: number) => void
    setLimit: (limit: number) => void
    setFilter: (filter: string) => void
    setPage: (page: number) => void
    getLengthCards: (body: CardPut) => Promise<number>
    calcPaginationPage: (body: CardPut) => Promise<void>
    deleteAllCards: () => void
}