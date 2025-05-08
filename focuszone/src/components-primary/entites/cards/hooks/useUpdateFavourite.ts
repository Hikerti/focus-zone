import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateFavourite = () => {
    return useMutation({
      mutationFn: async ({ id, favourites }: { id?: string; favourites: boolean }) => {
        const response = await axios.put(`http://localhost:4000/cafe/update/${id}`, { favourites });
        return response.data;
      },
    });
};