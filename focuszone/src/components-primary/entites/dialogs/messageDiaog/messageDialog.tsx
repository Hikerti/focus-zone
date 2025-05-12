import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {Textarea} from "@/components/ui/textarea.tsx";
// import {useState} from "react";

const MessageDialog = () => {
    // const [message, setMessage] = useState();

    return (
        <>
            <AlertDialogContent className='flex flex-col justify-center'>
                <AlertDialogHeader className='w-[460px]'>
                    <AlertDialogTitle>Введите свой отзыв</AlertDialogTitle>
                    <Textarea
                        className='max-w-full'
                        maxLength={300}
                    ></Textarea>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Выйти</AlertDialogCancel>
                    <AlertDialogAction>Отправить</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </>
    );
};

export default MessageDialog;