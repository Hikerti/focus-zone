import {useState} from "react";
import FormRegistration from "@/components-primary/widgets/forms/formRegistration/formRegistration.tsx";
import FormLogin from "@/components-primary/widgets/forms/formLogin/formLogin.tsx";

const FullForm = () => {
    const [changeForm, setChangeForm] = useState<boolean>(false)

    return (
        <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className="flex gap-4 mt-8">
                <h2
                    className='cursor-pointer border-b-2 border-white transition hover:border-zinc-900'
                    onClick={() => setChangeForm(!changeForm)}
                >
                    Регистрация
                </h2>
                <span className='w-[2px] bg-zinc-800'></span>
                <h2
                    className='cursor-pointer border-b-2 border-white transition hover:border-zinc-900'
                    onClick={() => setChangeForm(!changeForm)}
                >
                    Вход
                </h2>
            </div>
            <div className="w-full my-8">
                {
                    changeForm
                        ?
                        <FormRegistration></FormRegistration>
                        :
                        <FormLogin></FormLogin>
                }
            </div>
        </div>
    );
};

export default FullForm;