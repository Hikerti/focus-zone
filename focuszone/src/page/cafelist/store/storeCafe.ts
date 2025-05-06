import { create } from "zustand";
import { Card } from "../interface/interface";

interface useCafeGet {
    cards: Card[]
    setCards: (cards: Card[]) => void
}

export const useCafeGet = create<useCafeGet>((set) => ({
    cards: [],
    setCards: (cards: Card[]) => set({cards})
}))