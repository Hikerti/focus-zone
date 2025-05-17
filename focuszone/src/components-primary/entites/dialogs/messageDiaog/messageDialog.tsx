import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {Textarea} from "@/components/ui/textarea.tsx";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser.ts";
import {MessageDialogProps} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";

const MessageDialog = ({cafeId}: MessageDialogProps ) => {
    const [message, setMessage] = useState<string>();
    const users = useGetUser(state => state.users);

    const {mutate} = useMutation({
        mutationFn: async () => {
            if (!users || !users.length) {
                throw new Error('User must have a user object');
            }
            return await axios.post('http://localhost:4000/message/create_messages', {
                userId: users[0].id,
                cafeId: cafeId,
                content: message
            });
        },
        onSuccess: () => {
            console.log('Message sent!');
        },
        onError: (error) => {
            console.error('Error sending message:', error);
        }
    })

    const handleSendMessage = () => {
        mutate()
    }

    return (
        <>
            <AlertDialogContent className='flex flex-col justify-center'>
                <AlertDialogHeader className='w-[460px]'>
                    <AlertDialogTitle>Введите свой отзыв</AlertDialogTitle>
                    <Textarea
                        className='max-w-full'
                        maxLength={300}
                        onChange={e => setMessage(e.target.value)}
                    ></Textarea>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Выйти</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleSendMessage}
                    >Отправить</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </>
    );
};

export default MessageDialog;