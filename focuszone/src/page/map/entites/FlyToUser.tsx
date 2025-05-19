import { useMap } from "react-leaflet";
import {useMapData} from "@/page/map/store/store.ts";

const FlyToUser = () => {
    const userLocations = useMapData(state => state.userLocations)
    const setFlyToUser = useMapData(state => state.setFlyToUser)

    const map = useMap();
    if (userLocations) {
        map.flyTo(userLocations, 15);
        setFlyToUser(false)
    }
    return null;
};

export default FlyToUser;