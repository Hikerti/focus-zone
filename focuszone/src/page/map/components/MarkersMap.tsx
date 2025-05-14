import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import mapPoint from "@/assets/icon/map_point.svg.png";
import {useMap} from "@/page/map/store/store.ts";

const MarkersMap = () => {

    const points = useMap(state => state.points)
    const deletePoints = useMap(state => state.deletePoints)
    const userLocations = useMap(state => state.userLocations)

    const customIcon = new L.Icon({
        iconUrl: mapPoint,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <>
            {points.map((point, index) => (
                    <Marker key={index} position={point} icon={customIcon}>
                        <Popup>
                            <span
                                className='cursor-pointer'
                                onClick={(e) => deletePoints(point, e)}
                            >
                                Удалить</span>
                        </Popup>
                    </Marker>
                ))}
            {userLocations && (
                <Marker position={userLocations} icon={customIcon}>
                    <Popup>
                            <span
                                className='cursor-pointer'
                            >Вы здесь</span>
                    </Popup>
                </Marker>
            )}
        </>
    );
};

export default MarkersMap;