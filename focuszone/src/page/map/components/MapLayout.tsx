import {Button} from "@/components/ui/button.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {ReactNode} from "react";

const MapLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <div className='w-9/10 h-[800px] flex flex-col relative border-zinc-900 border-2'>
                <div className='w-full h-full flex bg-black'>
                    <div className='w-2/10 h-full flex flex-col bg-white gap-4 p-4 border-r-2 border-zinc-900'>
                        <Button>Добавить метку</Button>
                        <ScrollArea className="flex-1 rounded-md border">
                            <div className='flex flex-col p-4'>
                                <div className='flex gap-4 items-center'>
                                    <span>1</span>
                                    <p className='text-[12px]'>43352352</p>
                                </div>
                                <h4>Место</h4>
                                <span className='h-[1px] w-9/10 bg-zinc-900 mt-2'></span>
                            </div>
                        </ScrollArea>
                        <div className='flex items-center bg-zinc-200 p-2 rounded-lg'>
                            <Button className='w-1/2 rounded-r-[0px]' variant='secondary'>Пеший</Button>
                            <Button className='w-1/2 rounded-l-[0px]'>Машина</Button>
                        </div>
                        <Button>Определить мой местоположение</Button>
                        <Button>Начать маршрут</Button>
                    </div>
                    {children}
                </div>
                <div className='w-full flex bg-white justify-between p-4 border-t-2 border-zinc-900'>
                    <div className='bg-zinc-200 p-4 rounded-lg'>
                        <h5>Общая длина маршрута:</h5>
                        <h2>3,4 км</h2>
                    </div>
                    <div className='flex gap-4'>
                        <div className='bg-zinc-200 p-4 rounded-lg'>
                            <h5>Время прохождения:</h5>
                            <h2>2 часа 3 минуты</h2>
                        </div>
                        <div className='bg-zinc-200 flex p-4 rounded-lg gap-2 items-center'>
                            <h4>Скорость:</h4>
                            <h4>34 км/ч</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MapLayout;