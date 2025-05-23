import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogTitle,
    AlertDialogDescription
} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";

import {X} from "lucide-react";

import FormLogin from "@/components-primary/widgets/forms/formLogin/formLogin.tsx";

const DialogRegistration = () => {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant='secondary'
                    >
                        Войти
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <div>
                        <AlertDialogCancel>
                            <X/>
                        </AlertDialogCancel>
                    </div>
                    <AlertDialogTitle>
                        Войти
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Пожалуйста, заполните форму входа ниже.
                    </AlertDialogDescription>
                    <FormLogin/>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default DialogRegistration;