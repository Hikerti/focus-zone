import {SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";

import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import ContactInfo from "@/components-primary/entites/contactInfo/ContactInfo.tsx";

import { useGetUser } from "@/helpers/store/storeUser";
import { FindError } from "@/helpers/functions/findError";
import { FindLoading } from "@/helpers/functions/findLoading";

import DialogRegistration from "@/components-primary/entites/dialogs/dialogRegistration/dialogRegistration.tsx";
import DialogLogin from "@/components-primary/entites/dialogs/dialogLogin/dialogLogin.tsx";


const SheetInfo = () => {

    const {users, isError, isPending} = useGetUser()
        
    FindError(isError)
    FindLoading(isPending)

    if (!users || users.length === 0) {
        return (
            <div className="flex gap-4">
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
                        <div className="flex h-full justify-center items-center cursor-pointer gap-4">
                            <AvatarComponent></AvatarComponent>
                            <div className='flex flex-col '>
                                <p className='text-white !text-[12px]'>{user.name + " " + user.surname}</p>
                                <p className='text-white !text-[12px]'>@{user.login}</p>
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex h-full flex-col justify-center gap-2">
                                    <div className="flex gap-4">
                                        <AvatarComponent size={'w-[100px] h-[100px]'}></AvatarComponent>
                                        <div>
                                            <h4 className='text-zinc-900'>{user.name + " " + user.surname}</h4>
                                            <h4 className='text-zinc-900'>@{user.login}</h4>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <ContactInfo
                                            email={user.email}
                                            adress={user.adress}
                                            phone={user.phone}
                                        >
                                        </ContactInfo>
                                    </div>
                                </div>
                            </SheetTitle>
                            <div>
                                <h2 className='text-4xl mt-4'>О себе</h2>
                                <p>
                                    {user.description}
                                </p>
                            </div>
                        </SheetHeader>
                        <SheetFooter>
                            <SheetClose asChild>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </>
            }
        </>
    );
};

export default SheetInfo;