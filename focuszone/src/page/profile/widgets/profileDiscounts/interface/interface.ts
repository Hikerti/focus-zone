export interface Discount {
    id: number
    userId: string
    cafeId: string
    url: string
    logo: string
    title: string
    description: string
}

export interface DiscountsData {
    data: Discount[]
}

export interface UseDiscounts {
    discounts: Discount[]
    setDiscounts: (discounts: Discount[]) => void
}