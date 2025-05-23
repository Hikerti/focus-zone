import React, {ReactNode, useEffect, useState} from "react";

import {useMapData} from "@/page/map/store/store.ts";
import AddPoints from "@/page/map/entites/AddPoints.tsx";
import {isWithinRadius} from "@/page/map/functions/isWithinRadius.ts";

import {useMutation} from "@tanstack/react-query";

import axios from "axios";

import {useGetUser} from "@/helpers/store/storeUser.ts";
import ArrowRotate from "@/page/map/shared/arrowRotate";

const SideBarMapLayout: React.FC<{children: ReactNode}> = ({children}) => {

    const [showInfo, setShowInfo] = useState<boolean>(false);

    const carWaypoints = useMapData(state => state.carWaypoints);
    const walkWaypoints = useMapData(state => state.walkWaypoints);
    const points = useMapData(state => state.points);
    const userLocation = useMapData(state => state.userLocations)
    const urlScreen = useMapData(state => state.urlScreen)
    const users = useGetUser(state => state.users)
    const length = useMapData(state => state.length)
    const time = useMapData(state => state.time)

    const setFullPoints = useMapData(state => state.setFullPoints);

    const {mutate} = useMutation({
        mutationFn: async () => {
            if (!users) return
            return await axios.post('http://localhost:4000/achievement/create_achievement', {
                userId: users[0].id,
                url: urlScreen,
                title: `Пройден маршрут длинной ${length}`,
                description: `Вы прошли путь длинной ${length} км за ${time}. Продолжайте в том же духе`
            })
        }
    })

    useEffect(() => {
        if (!userLocation || points.length === 0) return;

        const updatedPoints = points.filter(
            (point) => !isWithinRadius(userLocation, point, 20)
        );

        if (updatedPoints.length !== points.length) {
            setFullPoints(updatedPoints);
        }

        if (updatedPoints.length == 0) {
            mutate()
        }
    }, [userLocation, points, carWaypoints, walkWaypoints]);

    return (
        <>
            <div
                className='
                    w-full
                    flex
                    bg-black
                '
            >
                <div
                    className={`
                        ${showInfo && 'h-[400px]'}
                        absolute z-1110  right-4 top-4
                        flex 
                        flex-col justify-between gap-4 
                        w-50  h-[116px]  max-h-full
                        bg-white
                        p-4 
                        rounded-xl 
                        transform duration-300
                    `
                }
                >
                    <h4>
                        Список меток
                    </h4>
                    {
                        showInfo &&
                        <AddPoints/>
                    }
                    <ArrowRotate
                        setShowInfo={setShowInfo}
                        showInfo={showInfo}
                    />
                </div>
                {children}
            </div>
        </>
    );
};

export default SideBarMapLayout;