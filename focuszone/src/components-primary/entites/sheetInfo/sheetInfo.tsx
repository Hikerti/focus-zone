import {SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import ContactInfo from "@/components-primary/entites/contactInfo/ContactInfo.tsx";

const SheetInfo = () => {
    return (
        <>
            <SheetTrigger asChild>
                <div className="flex h-full justify-center items-center cursor-pointer gap-4">
                    <AvatarComponent></AvatarComponent>
                    <div className='flex flex-col '>
                        <p className='text-white !text-[12px]'>Роман Аникаев</p>
                        <p className='text-white !text-[12px]'>@Hikerti</p>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex h-full flex-col justify-center gap-2">
                            <AvatarComponent size={'w-[100px] h-[100px]'}></AvatarComponent>
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col">
                                    <h4 className='text-zinc-900'>Роман Аникаев</h4>
                                    <h4 className='text-zinc-900'>@Hikerti</h4>
                                    <ContactInfo></ContactInfo>
                                </div>
                            </div>
                        </div>
                    </SheetTitle>
                    <div>
                        <h2 className='text-4xl mt-4'>О себе</h2>
                        <p>
                            Я создатель блаблабла
                        </p>
                    </div>
                </SheetHeader>
                <SheetFooter>
                    <SheetClose asChild>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </>
    );
};

export default SheetInfo;