import {Heart} from "lucide-react";

import {ILikeButtonProps} from "@/components-primary/shared/buttons/interface/interface";

import {useState} from "react";

const LikeButton = ({likeProps, setLikeProps}: ILikeButtonProps) => {
    const [like, setLike] = useState<boolean | undefined>(likeProps);

    return (
        <button
            onClick={() =>{
                    setLike(!like)
                    if (setLikeProps) setLikeProps(!like)
                }
            }
            aria-label="like-button"
        >
            <Heart
                data-testid="heart-icon"
                className={`
                ${like ? "text-red-500" : "text-zinc-900"} 
                bg-white 
                mt-1
                transition 
               `}
            />
        </button>
    );
};

export default LikeButton;