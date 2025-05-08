import {AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger} from "@/components/ui/alert-dialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {X} from "lucide-react";
import FormLogin from "@/components-primary/widgets/forms/formLogin/formLogin.tsx";

const DialogRegistration = () => {
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant='secondary'>Войти</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <div>
                        <AlertDialogCancel>
                            <X/>
                        </AlertDialogCancel>
                    </div>
                    <h2>Войти</h2>
                    <FormLogin></FormLogin>
                    {/*<AlertDialogCancel className='bg-zinc-900 text-zinc-100 hover:text-zinc-900'>*/}
                    {/*    Зарегистрироваться*/}
                    {/*</AlertDialogCancel>*/}
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default DialogRegistration;