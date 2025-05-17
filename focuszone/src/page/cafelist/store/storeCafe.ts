import { create } from "zustand";
import {Card, CardPut, useCafeGetProps} from "../interface/interface";
import axios from "axios";

export const useCafeGet = create<useCafeGetProps>((
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