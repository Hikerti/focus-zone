import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

import {useMutation} from "@tanstack/react-query";

import {UserData, UserLogin} from "@/components-primary/widgets/forms/interface/interface.ts";
import {LoginUser} from "@/components-primary/widgets/forms/function/loginUser.ts";

import {useGetUser} from "@/helpers/store/storeUser.ts"
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const formSchema = z.object({
    password: z.string().min(8, "Пароль должен состоять из минимум 8 символов"),
    email: z.string().email("Не верная форма email").min(1, "Почта пользователя должно быть"),
})

const FormLogin = () => {
    const [passwortVisible, setPasswordVisible] = useState<boolean>(false)

    const setUser = useGetUser(state => state.setUser);

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
            console.log("Успешно отправлено:", res.user);
            form.reset()
            setUser(res.user)
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
            <section className='w-full flex flex-col gap-4 items-center justify-center'>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='w-full bg-zinc-900 flex flex-col gap-4 px-4 py-5 rounded-xl'
                    >
                        <h3 className='text-white'>Введите свои данные</h3>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-white'>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-white'
                                            type='email'
                                            {...field}
                                            placeholder='xxx@mail.ru'
                                        >

                                        </Input>
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel className='text-white'>Пароль</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-white'
                                            type={!passwortVisible ? 'password' : 'text'}
                                            {...field}
                                            placeholder='1234567'
                                        >
                                        </Input>
                                    </FormControl>
                                    <span className='absolute bottom-[6px] right-2'>
                                            {passwortVisible 
                                            ?
                                            <Eye className="text-white" onClick={() => setPasswordVisible(!passwortVisible)} />
                                            :
                                            <EyeClosed className="text-white" onClick={() => setPasswordVisible(!passwortVisible)} />
                                            }
                                    </span>
                                    <FormMessage></FormMessage>
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