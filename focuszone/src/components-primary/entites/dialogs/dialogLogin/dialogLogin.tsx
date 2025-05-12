import {AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogDescription} from "@/components/ui/alert-dialog.tsx";
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
                <div className="flex justify-end">
                    <AlertDialogCancel>
                        <X />
                    </AlertDialogCancel>
                </div>
                <AlertDialogTitle>Зарегистрироваться</AlertDialogTitle>
                <AlertDialogDescription>
                    Пожалуйста, заполните форму регистрации ниже.
                </AlertDialogDescription>
                <FormRegistration />
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DialogLogin;