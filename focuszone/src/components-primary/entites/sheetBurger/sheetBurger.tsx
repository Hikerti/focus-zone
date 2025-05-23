import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

import {Link} from "react-router-dom";

import {X} from "lucide-react";

import DialogRegistration from "@/components-primary/entites/dialogs/dialogRegistration/dialogRegistration";
import DialogLogin from "@/components-primary/entites/dialogs/dialogLogin/dialogLogin";

import {useGetUser} from "@/helpers/store/storeUser";

const SheetBurger = () => {

    const login = localStorage.getItem('login');
    const users = useGetUser(state => state.users);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    className='
                flex
                w-full h-full
                flex-col items-center justify-center gap-1
                p-0 m-0
                cursor-pointer
            '
                >
            <span
                className='
                    h-[2px] w-full
                     bg-white
                    rounded-full
                '
            />
                    <span
                        className='
                    h-[2px] w-full
                    bg-white
                    rounded-full
                '
                    />
                    <span
                        className='
                    h-[2px] w-full
                    bg-white
                    rounded-full
                '
                    />
                </Button>
            </SheetTrigger>
            <SheetContent
                className='
                    bg-zinc-900
                    flex
                '
            >
                <SheetHeader
                    className='flex items-end'
                >
                    <SheetClose asChild
                        className='flex'
                    >
                        <Button
                            type="submit"
                            className='
                                w-6 h-6
                                p-0 m-0
                            '
                        >
                            <X/>
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <ul
                    className='
                        flex
                        flex-col items-end gap-2
                        pr-4
                        text-white text-[16px]
                    '
                >
                    <Link to={'/'}>
                        <li>
                            Главная
                        </li>
                    </Link>
                    <Link to={'/profile'}>
                        <li>
                            Профиль
                        </li>
                    </Link>
                    <Link to={'/map'}>
                        <li>
                            Карта
                        </li>
                    </Link>
                    <Link to={'/cafelist'}>
                        <li>
                            Список мест
                        </li>
                    </Link>
                </ul>
                {!login || users?.length == 0
                    ?
                    <SheetFooter>
                        <div
                            className='
                            w-full
                            flex
                            flex-col gap-2
                        '
                        >
                            <DialogRegistration />
                            <DialogLogin />
                        </div>
                    </SheetFooter>
                    :
                    <SheetFooter
                        className='hidden'
                    />
                }

            </SheetContent>
        </Sheet>
    );
};

export default SheetBurger;