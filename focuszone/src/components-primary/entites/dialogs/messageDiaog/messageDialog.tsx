import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {Textarea} from "@/components/ui/textarea.tsx";
import { Star } from "lucide-react";
import {useState} from "react";

import {MessageDialogProps} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";
import useCreateMessage from "@/components-primary/entites/dialogs/messageDiaog/hooks/useCreateMessage.tsx";
import useRating from "@/components-primary/entites/dialogs/messageDiaog/hooks/useRating.tsx";

const MessageDialog = ({cafeId, ratingNow}: MessageDialogProps ) => {
    const [message, setMessage] = useState<string>();
    const [rating, setRating] = useState<number>(0);
    const createMessage = useCreateMessage({cafeId, message});
    const ratingMessage = useRating({ratingNow, rating, cafeId})

    const handleSendMessage = () => {
        createMessage.mutate()
        ratingMessage.mutate()
    }

    return (
        <>
            <AlertDialogContent className='flex flex-col justify-center'>
                <AlertDialogHeader className='w-[460px]'>
                    <div
                        className="flex flex-col justify-center gap-4"
                    >
                        <div className='flex w-full justify-between items-center'>
                            <AlertDialogTitle>Введите свой отзыв</AlertDialogTitle>
                            <div>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        className={`p-1 rounded transition-colors hover:text-yellow-400 ${rating >= star && 'text-yellow-400'}`}
                                        key={star}
                                        onClick={() => setRating(star)}
                                    >
                                        <Star
                                            className='fill-current'
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Textarea
                            className='max-w-full'
                            maxLength={300}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Выйти</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleSendMessage}
                    >
                        Отправить</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </>
    );
};

export default MessageDialog;