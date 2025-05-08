import {AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {X} from "lucide-react";
import FormRegistration from "@/components-primary/widgets/forms/formRegistration/formRegistration.tsx";

const DialogLogin = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='secondary'>Зарегистрироваться</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <div>
                    <AlertDialogCancel>
                        <X/>
                    </AlertDialogCancel>
                </div>
                <h2>Зарегистрироваться</h2>
                <FormRegistration></FormRegistration>
                {/*<AlertDialogCancel className='bg-zinc-900 text-zinc-100 hover:text-zinc-900'>*/}
                {/*    Войти*/}
                {/*</AlertDialogCancel>*/}
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DialogLogin;