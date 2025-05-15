import MapView from "../MapView/MapView.tsx";
import {useUserLocation} from "@/page/map/hooks/useUserLocation.ts";
import {useMapData} from "@/page/map/store/store.ts";
import {useEffect} from "react";

const Map = () => {
    useUserLocation()
    const userLocations = useMapData(state => state.userLocations)
    const setUserLocations = useMapData(state => state.setUserLocation)

    useEffect(() => {
        const timeoutId = setInterval(() => {
            if (userLocations !== null) {
                setUserLocations(userLocations)
            }
        }, 5000)

        return () => {
            clearInterval(timeoutId)
        }
    }, [])

    const userLocation = useMapData(state => state.userLocations)
    return (
        <>
            {userLocation &&
                <section className='w-full h-full flex flex-col items-center justify-center my-10'>
                    <MapView></MapView>
                </section>
            }
        </>
    );
};

export default Map;