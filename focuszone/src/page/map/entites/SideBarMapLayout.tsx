import {Button} from "@/components/ui/button.tsx";
import React, {ReactNode, useEffect} from "react";
import {useMapData} from "@/page/map/store/store.ts";
import AddPoints from "@/page/map/entites/AddPoints.tsx";
import {takeMapScreenshot} from "@/page/map/functions/takeScreenshot.ts";
import {isWithinRadius} from "@/page/map/functions/isWithinRadius.ts";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser.ts";

const SideBarMapLayout: React.FC<{children: ReactNode}> = ({children}) => {

    const carWaypoints = useMapData(state => state.carWaypoints);
    const walkWaypoints = useMapData(state => state.walkWaypoints);
    const points = useMapData(state => state.points);
    const userLocation = useMapData(state => state.userLocations)
    const urlScreen = useMapData(state => state.urlScreen)
    const users = useGetUser(state => state.users)
    const length = useMapData(state => state.length)
    const time = useMapData(state => state.time)

    const setCarWaypoints = useMapData(state => state.setCarWaypoints);
    const setWalkWaypoints = useMapData(state => state.setWalkWaypoints);
    const setStartPath = useMapData(state => state.setStartPath);
    const setLength = useMapData(state => state.setLength);
    const setTime = useMapData(state => state.setTime);
    const setFlyToUser = useMapData(state => state.setFlyToUser);
    const setFitBounds = useMapData(state => state.setFitBounds);
    const setUrlScreen = useMapData(state => state.setUrlScreen);
    const setFullPoints = useMapData(state => state.setFullPoints);

    const changeCarMap = () => {
        setCarWaypoints(true)
        setWalkWaypoints(false)
    }

    const changeWalkMap = () => {
        setWalkWaypoints(true)
        setCarWaypoints(false)
    }

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

    const handelRunPath = async () => {
        const url = await takeMapScreenshot()
        if (url) {
            setUrlScreen(url)
        }
    }

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
                className='w-full h-full flex bg-black'
            >
                <div
                    className='w-2/10 max-h-full flex flex-col justify-between bg-white gap-4 p-4 border-r-2 border-zinc-900'
                >
                    <AddPoints/>
                    <div
                        className='flex flex-col gap-4'
                    >
                        <div
                            className='flex items-center bg-zinc-200 p-2 rounded-lg'
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
                        >
                            Моё местоположение
                        </Button>
                        <div
                            className='flex flex-col gap-2'
                        >
                            <h6>
                                Запуск маршрута
                            </h6>
                            <div
                                className='flex'
                            >
                                <Button
                                    className='w-1/2 rounded-r-none'
                                    onClick={() => {
                                        setStartPath(true)
                                        handelRunPath()
                                    }}
                                >
                                    Начать
                                </Button>
                                <Button
                                    className='w-1/2 rounded-l-none'
                                    onClick={() => {
                                        setStartPath(false)
                                        setLength("0")
                                        setTime(0)
                                    }}
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