import {Button} from "@/components/ui/button.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {ReactNode} from "react";
import {useMap} from "@/page/map/store/store.ts";

const SideBarMapLayout = ({children}: {children: ReactNode}) => {

    const setCarWaypoints = useMap(state => state.setCarWaypoints);
    const setWalkWaypoints = useMap(state => state.setWalkWaypoints);

    const changeCarMap = () => {
        setCarWaypoints(true)
        setWalkWaypoints(false)
    }

    const changeWalkMap = () => {
        setWalkWaypoints(true)
        setCarWaypoints(false)
    }

    return (
        <>
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
                        <Button
                            className='w-1/2 rounded-r-[0px]'
                            variant='secondary'
                            onClick={() => changeWalkMap()}
                        >
                            Пеший</Button>
                        <Button
                            className='w-1/2 rounded-l-[0px]'
                            onClick={() => changeCarMap()}
                        >
                            Машина</Button>
                    </div>
                    <Button>Определить мой местоположение</Button>
                    <Button>Начать маршрут</Button>
                </div>
                {children}
            </div>
        </>
    );
};

export default SideBarMapLayout;