import {Button} from "@/components/ui/button.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {ReactNode   } from "react";
import {useMapData} from "@/page/map/store/store.ts";

const SideBarMapLayout = ({children}: {children: ReactNode}) => {

    const setCarWaypoints = useMapData(state => state.setCarWaypoints);
    const setWalkWaypoints = useMapData(state => state.setWalkWaypoints);
    const points = useMapData(state => state.points);

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
            <div className='w-full h-[100vh] flex bg-black'>
                <div className='w-2/10 flex flex-col justify-between bg-white gap-4 p-4 border-r-2 border-zinc-900'>
                    <div className='h-7/10 h-full flex flex-col gap-4'>
                        <Button>Добавить метку</Button>
                        <div className='max-h-[300px]'>
                            <ScrollArea className="!min-h-7/10 overflow-y-auto rounded-md border">
                                {points.map((point, i) => (
                                    <div key={i} className='flex flex-col p-4'>
                                        <div className='flex gap-4 items-center'>
                                            <span>{i + 1}</span>
                                            <div>
                                                <h6>Координаты:</h6>
                                                <div className='flex gap-2'>
                                                    <p className='text-[12px]'>{point.lng.toFixed(4)}</p>
                                                    <p className='text-[12px]'>{point.lat.toFixed(4)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h4>Место</h4>
                                        <span className='h-[1px] w-9/10 bg-zinc-900 mt-2'></span>
                                    </div>
                                ))}
                            </ScrollArea>
                        </div>
                    </div>
                    <div className='h-3/10 flex flex-col gap-4'>
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
                </div>
                {children}
            </div>
        </>
    );
};

export default SideBarMapLayout;