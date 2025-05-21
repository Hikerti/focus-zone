import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

import {useMutation} from "@tanstack/react-query";

import {UserData, UserLogin} from "@/components-primary/widgets/forms/interface/interface.ts";
import {LoginUser} from "@/components-primary/widgets/forms/function/loginUser.ts";

import {useGetUser} from "@/helpers/store/storeUser.ts"

import { Eye, EyeClosed } from "lucide-react";

const formSchema = z.object({
    password: z.string().min(8, "Пароль должен состоять из минимум 8 символов"),
    email: z.string().email("Не верная форма email").min(1, "Почта пользователя должно быть"),
})

const FormLogin = () => {
    const [passwortVisible, setPasswordVisible] = useState<boolean>(false)

    const setUser = useGetUser(state => state.setUser);
    const setLogin = useGetUser(state => state.setLogin);

    const form = useForm<UserLogin>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: '',
            email: '',
        }
    });

    const mutation = useMutation({
        mutationFn: (data: UserLogin) => LoginUser(data),
        onSuccess: (res: UserData) => {
            form.reset()
            setUser(res.user)
            setLogin(true)
        },
        onError: (error) => {
            console.error("Ошибка при отправке:", error);
        },
    })

    function onSubmit(values: UserLogin) {
        mutation.mutate(values)
    }

    return (
        <>
            <section
                className='
                    flex
                    w-full
                    flex-col gap-4 items-center justify-center
                '
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='
                            flex
                            w-full
                            flex-col gap-4
                            bg-zinc-900
                            px-4 py-5
                            rounded-xl
                        '
                    >
                        <h3
                            className='text-white'
                        >
                            Введите свои данные
                        </h3>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        className='text-white'
                                    >
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-white'
                                            type='email'
                                            {...field}
                                            placeholder='xxx@mail.ru'
                                        >

                                        </Input>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem
                                    className="relative"
                                >
                                    <FormLabel
                                        className='text-white'
                                    >
                                        Пароль
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-white'
                                            type={!passwortVisible ? 'password' : 'text'}
                                            {...field}
                                            placeholder='12345678'
                                        >
                                        </Input>
                                    </FormControl>
                                    <span className='absolute right-2 top-7'>
                                            {passwortVisible 
                                            ?
                                            <Eye className="text-white" onClick={() => setPasswordVisible(!passwortVisible)} />
                                            :
                                            <EyeClosed className="text-white" onClick={() => setPasswordVisible(!passwortVisible)} />
                                            }
                                    </span>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button
                            variant="secondary"
                            type='submit'
                        >
                            Отправить информацию
                        </Button>
                    </form>
                </Form>
            </section>
        </>

    );
};

export default FormLogin;