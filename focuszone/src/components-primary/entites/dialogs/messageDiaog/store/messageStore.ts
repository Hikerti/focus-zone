import {create} from "zustand";
import axios from "axios";

interface Message {
    id: number
    userId: string
    cafeId: number
    content: string
    createdAt: Date
    updatedAt: Date
}

interface MessageStore {
    messages: Message[]
    setUserMessage: (userId: string) => Promise<void>
    setCafeMessage: (cafeId: number) => Promise<void>
    setIdMessage: (id: number) => Promise<void>
}

export const useStoreMessage = create<MessageStore>((set, get) => ({
    messages: [],

    setUserMessage: async (userId) => {
        try {
            const res = await axios.get<Message[]>(`http://localhost:4000/message/get_user_messages/${userId}`)
            set({messages: res.data})
        } catch (e) {
            console.error(e)
        }
    },

    setCafeMessage: async (cafeId) => {
        try {
            const res = await axios.get<Message[]>(`http://localhost:4000/message/get_cafe_messages/${cafeId}`)
            set({messages: res.data})
        } catch (e) {
            console.error(e)
        }
    },

    setIdMessage: async (id) => {
        try {
            const res = await axios.get<Message[]>(`http://localhost:4000/message/get_id_messages/${id}`)
            set({messages: res.data})
        } catch (e) {
            console.error(e)
        }
    },
}))