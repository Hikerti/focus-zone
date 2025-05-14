import MapView from "./MapView";
import {useUserLocation} from "@/page/map/hooks/useUserLocation.ts";
import {useEffect} from "react";

const Map = () => {
    const {getUserLocation} = useUserLocation()

    useEffect(() => {
        getUserLocation()
    }, [])

    return (
        <section className='w-full flex flex-col items-center justify-center my-10'>
            <MapView></MapView>
        </section>
    );
};

export default Map;