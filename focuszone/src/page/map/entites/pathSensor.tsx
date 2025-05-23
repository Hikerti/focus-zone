import {useMapData} from "@/page/map/store/store";

import { PathSensorProps } from "../interface/interface";

import { Button } from "@/components/ui/button";

const PathSensor = ({hour, minutes, showInfo}: PathSensorProps) => {

    const speed  = useMapData(state => state.speed);
    const walkWaypoints = useMapData(state => state.walkWaypoints);
    const carWaypoints = useMapData(state => state.carWaypoints);

    const setFlyToUser = useMapData(state => state.setFlyToUser);
    const setCarWaypoints = useMapData(state => state.setCarWaypoints);
    const setWalkWaypoints = useMapData(state => state.setWalkWaypoints);
    const setFitBounds = useMapData(state => state.setFitBounds);

    const changeCarMap = () => {
        setCarWaypoints(true)
        setWalkWaypoints(false)
    }

    const changeWalkMap = () => {
        setWalkWaypoints(true)
        setCarWaypoints(false)
    }

    return (
        <div className={`
            ${showInfo ? 'h-full' : 'h-0'} 
            flex 
            flex-col gap-2 
            transition-all duration-300
            
            lg:flex-row
        `
        }>
            <div className={`flex-col gap-2 ${showInfo ? 'flex' : 'hidden'}`}>
                <div
                    className='
                        flex
                        items-center
                        bg-zinc-200
                        p-2
                        rounded-lg
                    '
                >
                    <Button
                        className={`w-1/2 rounded-r-none cursor-pointer ${!walkWaypoints ? 'bg-white text-zinc-900 hover:text-white' : 'bg-zinc-800'}`}
                        onClick={() => {
                            changeWalkMap()
                            setFitBounds(true)
                        }}
                    >
                        Пеший
                    </Button>
                    <Button
                        className={`w-1/2 rounded-l-none cursor-pointer ${!carWaypoints ? 'bg-white text-zinc-900 hover:text-white' : 'bg-zinc-800'}`}
                        onClick={() => {
                            changeCarMap()
                            setFitBounds(true)
                        }}
                    >
                        Машина
                    </Button>
                </div>
                <Button
                    onClick={() => setFlyToUser(true)}
                    variant='secondary'
                >
                    Моё местоположение
                </Button>
            </div>
            <div
                className={`
                        ${showInfo ? 'flex' : 'hidden'}
                        justify-between gap-2
                        w-full
                        border-t-2 border-zinc-900
                        
                        sm:gap-2 sm:justify-end
                    `}
            >
                <div
                    className='
                        flex
                        flex-col justify-center
                        bg-zinc-200
                        p-4
                        rounded-lg
                    '
                >
                    <h5
                        className='
                            text-[14px]

                            sm:text-[18px]
                        '
                    >
                        Общая длина маршрута:
                    </h5>
                    <h2
                        className='
                            text-[24px]

                            sm:text-[32px]
                        '
                    >
                        {length} км
                    </h2>
                </div>
                <div
                    className='
                        flex
                        flex-col justify-center
                        bg-zinc-200
                        p-4
                        rounded-lg
                    '
                >
                    <h5
                        className='
                            text-[14px]

                            sm:text-[18px]
                        '
                    >
                        Время прохождения:
                    </h5>
                    <h2
                        className='
                            text-[24px]

                            sm:text-[32px]
                        '
                    >
                        {hour} ч {minutes} минут
                    </h2>
                </div>
                <div
                    className='
                        flex

                        flex-col gap-2 items-center justify-center
                        bg-zinc-200
                        p-4
                        rounded-lg
                    '
                >
                    <h4
                        className='
                            text-[14px]

                            sm:text-[18px]
                        '
                    >
                        Скорость:
                    </h4>
                    <h4>
                        {speed} км/ч
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default PathSensor;