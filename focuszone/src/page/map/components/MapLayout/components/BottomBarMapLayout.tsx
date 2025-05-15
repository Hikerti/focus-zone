import { useMapData } from "@/page/map/store/store";
import {muniteParseHour} from "@/page/map/functions/functions.ts";
import {useEffect, useState} from "react";

const BottomBarMapLayout = () => {
    const time = useMapData(state => state.time);
    const length = useMapData(state => state.length);
    const speed  = useMapData(state => state.speed);
    const [hour, setHour] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)

    useEffect(() => {
        const {hour, minutes} = muniteParseHour(time)
        setHour(hour)
        setMinutes(minutes)
    }, [time]);

    return (
        <>
            <div className='w-full flex bg-white justify-between p-4 border-t-2 border-zinc-900'>
                <div className='bg-zinc-200 p-4 rounded-lg'>
                    <h5>Общая длина маршрута:</h5>
                    <h2>{length} км</h2>
                </div>
                <div className='flex gap-4'>
                    <div className='bg-zinc-200 p-4 rounded-lg'>
                        <h5>Время прохождения:</h5>
                        <h2>{hour} ч {minutes} минут</h2>
                    </div>
                    <div className='bg-zinc-200 flex p-4 rounded-lg gap-2 items-center'>
                        <h4>Скорость:</h4>
                        <h4>{speed} км/ч</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomBarMapLayout;