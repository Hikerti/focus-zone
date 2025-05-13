import { create } from "zustand";
import {Card, CardPut} from "../interface/interface";
import axios from "axios";

interface useCafeGet {
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

export const useCafeGet = create<useCafeGet>((
    set,
    get
) => ({

    cards: [],
    totalPage: 0,
    page: 1,
    limit: 5,
    filter: 'none',

    setCards: (cards: Card[]) => set({cards}),
    setTotalPage: (totalPage: number) => set({totalPage}),
    setLimit: (limit: number) => set({limit}),
    setFilter: (filter: string) => set({filter}),
    setPage: (page: number) => set({page}),

    getLengthCards: async (body: CardPut) => {
        try {
            const length = await axios.post('http://localhost:4000/cafe/cards_length', body)
            return length.data
        } catch (e) {
            console.error("Error in getLengthCards: " + e);
        }
    },

    calcPaginationPage: async (body: CardPut) => {
        const length = await get().getLengthCards(body)
        if (length !== undefined) {
            const totalPage = Math.ceil(length / get().limit)
            get().setTotalPage(totalPage)
        }
    },

    deleteAllCards: () => set({cards: []})
}))