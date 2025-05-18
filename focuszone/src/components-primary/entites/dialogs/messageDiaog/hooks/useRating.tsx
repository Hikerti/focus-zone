import { useMutation } from "@tanstack/react-query";
import {UseRatingProps} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";
import axios from "axios";

const UseRating = ({ratingNow, rating, cafeId}: UseRatingProps) => {
    return useMutation({
        mutationFn: async () => {
            console.log([...ratingNow, rating])
            return await axios.put(`http://localhost:4000/cafe/update/${cafeId}`, {
                rating: [...ratingNow, rating]
            });
            window.location.reload();
        },
        onSuccess: () => {
            console.log('Rating was successfully!');
        },
        onError: (error) => {
            console.error('Error rating message:', error);
        }
    })
};

export default UseRating;