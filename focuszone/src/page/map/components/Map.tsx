import MapView from "./MapView";
import {useUserLocation} from "@/page/map/hooks/useUserLocation.ts";
import {useMapData} from "@/page/map/store/store.ts";

const Map = () => {
    useUserLocation()
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