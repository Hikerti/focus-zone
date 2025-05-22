import MapView from "../MapView/MapView.tsx";

import {useUserLocation} from "@/page/map/hooks/useUserLocation.ts";
import {useMapData} from "@/page/map/store/store.ts";

const Map = () => {
    useUserLocation()

    const userLocation = useMapData(state => state.userLocations)

    return (
        <>
            {userLocation &&
                <section
                    className='
                        relative z-50
                        flex
                        flex-col items-center justify-center
                        w-full h-full
                        my-10
                    '
                >
                    <MapView/>
                </section>
            }
        </>
    );
};

export default Map;