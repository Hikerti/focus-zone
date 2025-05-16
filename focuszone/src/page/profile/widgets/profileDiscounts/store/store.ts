import {create} from "zustand";
import {Discount, UseDiscounts} from "@/page/profile/widgets/profileDiscounts/interface/interface.ts";

export const useDiscounts = create<UseDiscounts>((set) => ({
    discounts: [],
    setDiscounts: (discounts: Discount[]) => {
        set({discounts: [...discounts]})
    }
}))