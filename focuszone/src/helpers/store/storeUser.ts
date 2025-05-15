import { create } from "zustand";
import { UserFullData } from "../interface/interface/interface.ts";

interface useGetStore {
    users: UserFullData[] | null
    isError: boolean,
    isPending: boolean,

    setUser: (user: UserFullData) => void
    clearUser: () => void,
}

export const useGetUser = create<useGetStore>((set) => ({
    users: [],
    isError: false,
    isPending: false,

    setUser(user: UserFullData) {
        set({users: [user]})
        localStorage.setItem('user', JSON.stringify(user));
    },
    clearUser: () => {
        set({ users: null });
        localStorage.removeItem('user');
    },
}))