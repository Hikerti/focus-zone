import {SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";

import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import ContactInfo from "@/components-primary/entites/contactInfo/ContactInfo.tsx";
import { FindLoading } from "@/components-primary/entites/loading/findLoading.tsx";
import DialogRegistration from "@/components-primary/entites/dialogs/dialogRegistration/dialogRegistration.tsx";
import DialogLogin from "@/components-primary/entites/dialogs/dialogLogin/dialogLogin.tsx";
import {useLogout} from "@/components-primary/entites/sheetInfo/hooks/useLogout.ts";

import { useGetUser } from "@/helpers/store/storeUser";

const SheetInfo = () => {


    const {users, isPending} = useGetUser()
    const logoutUser = useLogout()

    FindLoading(isPending)

    if (!users || users.length === 0) {
        return (
            <div
                className="
                    hidden
                    gap-4

                    sm:flex
                "
            >
                <DialogRegistration />
                <DialogLogin />
            </div>
        );
    }

    const user = users[0]

    return (
        <>
            {users
                &&
                <>
                    <SheetTrigger asChild>
                        <div
                            className="
                                   h-full flex
                                   justify-end items-center gap-4
                                   cursor-pointer
                               "
                        >
                            <AvatarComponent
                                size={'w-[32px] h-[32px]'}
                                url={user.name}
                            >
                            </AvatarComponent>
                            <div
                                className='
                                        hidden
                                        flex-col

                                        sm:flex
                                   '
                            >
                                <p
                                    className='text-white !text-[12px]'
                                >
                                    {user.name}
                                </p>
                                <p
                                    className='text-white !text-[12px]'
                                >
                                    @{user.login}
                                </p>
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <div
                                className="
                                    flex
                                    h-full
                                    flex-col justify-center gap-2
                                "
                            >
                                <div
                                    className="
                                        flex
                                        gap-4
                                    "
                                >
                                    <AvatarComponent
                                        size={'w-[100px] h-[100px]'}
                                        url={user.name}
                                    />
                                    <div>
                                        <h4
                                            className='text-zinc-900'
                                        >
                                            {user.name + " " + user.surname}
                                        </h4>
                                        <h4
                                            className='text-zinc-900'
                                        >
                                            @{user.login}
                                        </h4>
                                    </div>
                                </div>
                                <div
                                    className="
                                        flex
                                        flex-col
                                    "
                                >
                                    <ContactInfo
                                        email={user.email}
                                        adress={user.adress}
                                        phone={user.phone}
                                    >
                                    </ContactInfo>
                                </div>
                            </div>
                            <div>
                                <h2
                                    className='
                                    text-4xl
                                    mt-4'
                                >
                                    О себе
                                </h2>
                                <p>
                                    {user.description}
                                </p>
                            </div>
                        </SheetHeader>
                        <SheetFooter>
                            <SheetClose asChild>
                            </SheetClose>
                            <Button
                                onClick={() => logoutUser()}
                            >
                                Выйти из аккаунта
                            </Button>
                        </SheetFooter>
                    </SheetContent>
                </>
            }
        </>
    );
};

export default SheetInfo;