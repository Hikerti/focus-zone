import {Button} from "@/components/ui/button.tsx";
import {ReactNode   } from "react";
import {useMapData} from "@/page/map/store/store.ts";
import AddPoints from "@/page/map/entites/AddPoints.tsx";

const SideBarMapLayout = ({children}: {children: ReactNode}) => {

    const setCarWaypoints = useMapData(state => state.setCarWaypoints);
    const setWalkWaypoints = useMapData(state => state.setWalkWaypoints);
    const carWaypoints = useMapData(state => state.carWaypoints);
    const walkWaypoints = useMapData(state => state.walkWaypoints);
    const setStartPath = useMapData(state => state.setStartPath);

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
                <div className='w-2/10 max-h-full flex flex-col justify-between bg-white gap-4 p-4 border-r-2 border-zinc-900'>
                    <AddPoints></AddPoints>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center bg-zinc-200 p-2 rounded-lg'>
                            <Button
                                className={`w-1/2 rounded-r-none ${!walkWaypoints ? 'bg-white text-zinc-900 hover:text-white' : 'bg-zinc-800'}`}
                                onClick={() => changeWalkMap()}
                            >
                                Пеший
                            </Button>
                            <Button
                                className={`w-1/2 rounded-l-none ${!carWaypoints ? 'bg-white text-zinc-900 hover:text-white' : 'bg-zinc-800'}`}
                                onClick={() => changeCarMap()}
                            >
                                Машина
                            </Button>
                        </div>
                        <Button>Моё местоположение</Button>
                        <div className='flex flex-col gap-2'>
                            <h6>Запуск маршрута</h6>
                            <div className='flex'>
                                <Button
                                    className='w-1/2 rounded-r-none'
                                    onClick={() => setStartPath(true)}
                                >
                                    Начать
                                </Button>
                                <Button
                                    className='w-1/2 rounded-l-none'
                                    onClick={() => setStartPath(false)}
                                >
                                    Закончить
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
                {children}
            </div>
        </>
    );
};

export default SideBarMapLayout;