import { create } from "zustand";
import { UserFullData } from "../interface/interface/interface.ts";

interface useGetStore {
    users: UserFullData[] | null
    isError: boolean,
    isPending: boolean,
    login: boolean

    setUser: (user: UserFullData) => void
    clearUser: () => void,
    setLogin: (loginUser: boolean) => void,
}

export const useGetUser = create<useGetStore>((set) => ({
    users: [],
    login: false,
    isError: false,
    isPending: false,

    setUser(user: UserFullData) {
        set({users: [user]})
    },
    clearUser: () => {
        set({ users: [] });
    },
    setLogin: (loginUser: boolean) => {
        set({login: loginUser})
        localStorage.setItem("login", JSON.stringify(loginUser));
        console.log(loginUser);
    }
}))