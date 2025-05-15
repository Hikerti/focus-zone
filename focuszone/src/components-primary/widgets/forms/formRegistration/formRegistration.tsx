import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useMutation} from "@tanstack/react-query";
import {RegistrationUser} from "@/components-primary/widgets/forms/function/registrationUser.ts";
import {UserRegistration} from "@/components-primary/widgets/forms/interface/interface.ts";
import {useGetUser} from "@/helpers/store/storeUser.ts";
import {UserFullData} from "@/helpers/interface/interface/interface.ts";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const phoneRegex = /^(\+7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

const formSchema = z.object({
    name: z.string().min(1, "Имя пользователя должно быть"),
    surname: z.string().min(1, "Фамилия пользователя должно быть"),
    phone: z.string().regex(phoneRegex, 'Неверный формат телефона'),
    password: z.string().min(8, "Пароль должен состоять из минимум 8 символов"),
    login: z.string().min(1, "Логин пользователя должно быть"),
    email: z.string().email("Не верная форма email").min(1, "Почта пользователя должно быть"),
    description: z.string().max(300, ''),
    adress: z.string(),
})

const FormRegistration = () => {
    const setUser = useGetUser(state => state.setUser)
    const [passwortVisible, setPasswordVisible] = useState<boolean>(false)

    const form = useForm<UserRegistration>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            surname: '',
            phone: '',
            adress: '',
            password: '',
            login: '',
            email: '',
            description: ''
        }
    });

    const mutation = useMutation({
        mutationFn: (data: UserRegistration) => RegistrationUser(data),
        onSuccess: (res: UserFullData) => {
            console.log("Успешно отправлено:", res);
            form.reset()
            setUser(res)
        },
        onError: (error) => {
            console.error("Ошибка при отправке:", error);
        },
    })

    function onSubmit(values: UserRegistration) {
        mutation.mutate(values)
    }

    return (
        <>
         <section className='w-full flex flex-col gap-4 items-center justify-center'>
             <Form {...form}>
                 <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className='w-full bg-zinc-900 flex flex-col gap-4 px-4 py-4 rounded-xl'
                 >
                     <h3 className='text-white'>Введите свои данные</h3>
                     <FormField
                         control={form.control}
                         name="surname"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Фамилия</FormLabel>
                                 <FormControl>
                                     <Input
                                         className='text-white'
                                         type='text'
                                         {...field}
                                         placeholder='Иванов'
                                     >

                                     </Input>
                                 </FormControl>
                                 <FormMessage></FormMessage>
                             </FormItem>
                         )}
                     />

                     <FormField
                         control={form.control}
                         name="name"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Имя</FormLabel>
                                 <FormControl>
                                     <Input
                                         className='text-white'
                                         type='text'
                                         {...field}
                                         placeholder='Иван'
                                     >

                                     </Input>
                                 </FormControl>
                                 <FormMessage></FormMessage>
                             </FormItem>
                         )}
                     />

                     <FormField
                         control={form.control}
                         name="login"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Login</FormLabel>
                                 <FormControl>
                                     <Input
                                         className='text-white'
                                         type="text"
                                         {...field}
                                         placeholder='Russian man'
                                     />
                                 </FormControl>
                                 <FormMessage></FormMessage>
                             </FormItem>
                         )}
                     />

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

                     <FormField
                         control={form.control}
                         name="phone"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Телефон</FormLabel>
                                 <FormControl>
                                     <Input
                                         className='text-white'
                                         type='text'
                                         {...field}
                                         placeholder='+7 999 999 99 99'
                                     >

                                     </Input>
                                 </FormControl>
                                 <FormMessage></FormMessage>
                             </FormItem>
                         )}
                     />

                     <FormField
                         control={form.control}
                         name="adress"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Адрес</FormLabel>
                                 <FormControl>
                                     <Input
                                         className='text-white'
                                         type='text'
                                         {...field}
                                         placeholder='г.Москва, ул. Ленина 56'
                                     >

                                     </Input>
                                 </FormControl>
                                 <FormMessage></FormMessage>
                             </FormItem>
                         )}
                     />

                     <FormField
                         control={form.control}
                         name="description"
                         render={({ field }) => (
                             <FormItem>
                                 <FormLabel className='text-white'>Описание</FormLabel>
                                 <FormControl>
                                     <Textarea className='text-white' {...field}></Textarea>
                                 </FormControl>
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

export default FormRegistration;