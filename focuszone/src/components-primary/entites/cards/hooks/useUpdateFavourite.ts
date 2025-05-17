import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {useUpdateFavouriteFunction} from "@/components-primary/entites/cards/interface.ts";

export const useUpdateFavourite = () => {
    return useMutation({
      mutationFn: async ({ id, favourites }: useUpdateFavouriteFunction) => {
        const response = await axios.put(`http://localhost:4000/cafe/update/${id}`, { favourites });
        return response.data;
      },
    });
};