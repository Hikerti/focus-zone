import {Marker, Popup} from "react-leaflet";
import {useMap} from "@/page/map/store/store.ts";

const MarkersMap = () => {

    const points = useMap(state => state.points)
    const deletePoints = useMap(state => state.deletePoints)
    const userLocations = useMap(state => state.userLocations)

    return (
        <>
            {points.map((point, index) => (
                    <Marker key={index} position={point}>
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
                <Marker position={userLocations}>
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