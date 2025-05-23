import { useMapData } from "@/page/map/store/store";
import {minuteParseHour} from "@/page/map/functions/minuteParseHour.ts";

import {useEffect, useState} from "react";
import ArrowRotate from "@/page/map/shared/arrowRotate";
import StartAndFinishButton from "@/page/map/shared/startAndFinishButton";
import PathSensor from "@/page/map/entites/pathSensor";

const BottomBarMapLayout = () => {

    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [hour, setHour] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)

    const time = useMapData(state => state.time);

    useEffect(() => {
        const {hour, minutes} = minuteParseHour(time)
        setHour(hour)
        setMinutes(minutes)
    }, [time]);

    return (
        <>
            <div className='
                absolute bottom-0 z-1100
                flex
                flex-col
                w-full
                bg-zinc-900
                p-4
                rounded-t-2xl
            '
            >
                <ArrowRotate
                    setShowInfo={setShowInfo}
                    showInfo={showInfo}
                />
                <div
                    className='
                        flex
                        flex-col gap-2
                    '
                >
                    <div
                        className='
                            flex
                            flex-col gap-2
                        '
                    >
                        <h6
                            className='text-white'
                        >
                            Запуск маршрута
                        </h6>
                        <StartAndFinishButton/>
                    </div>
                    <PathSensor
                        hour={hour}
                        minutes={minutes}
                        showInfo={showInfo}
                    />
                </div>
            </div>
        </>
    );
};

export default BottomBarMapLayout;