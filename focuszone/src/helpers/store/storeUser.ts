import { create } from "zustand";
import {useGetStore, UserFullData} from "../interface/interface.ts";

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