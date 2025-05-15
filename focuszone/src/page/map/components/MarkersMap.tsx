import {Marker, Popup} from "react-leaflet";
import {useMapData} from "@/page/map/store/store.ts";

const MarkersMap = () => {

    const points = useMapData(state => state.points)
    const deletePoints = useMapData(state => state.deletePoints)
    const userLocations = useMapData(state => state.userLocations)

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