import { create } from "zustand";
import { UserFullData } from "../interface/interface";
import axios from "axios";

interface useGetStore {
    users: UserFullData[]
    isError: boolean,
    isPending: boolean,
    getUser: () => Promise<void>
}

export const useGetUser = create<useGetStore>((set) => ({
    users: [],
    isError: false,
    isPending: false,
    getUser: async () => {
        set({ isPending: true, isError: false })
        try {
            const response = await axios.get<UserFullData>("http://localhost:4000/user/get_user/f95a4700-1adc-422a-8ebe-d8533ba75fa6")
            set({ isPending: false, isError: false, users: [response.data]})
        } catch {
            set({ isPending: false, isError: true })
        }
    }
}))