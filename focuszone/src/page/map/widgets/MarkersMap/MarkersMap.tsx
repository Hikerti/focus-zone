import L from 'leaflet';
import {Marker, Popup} from "react-leaflet";

import {useMapData} from "@/page/map/store/store.ts";

import userNavigate from '../../../../assets/icon/userNavigate.png'

const MarkersMap = () => {

    const points = useMapData(state => state.points)
    const deletePoints = useMapData(state => state.deletePoints)
    const userLocations = useMapData(state => state.userLocations)

    const customIcon = L.icon({
        iconUrl: userNavigate,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <>
            {points.map((point, index) => (
                    <Marker
                        key={index}
                        position={point}
                    >
                        <Popup>
                            <span
                                className='cursor-pointer'
                                onClick={(e) => deletePoints(point, e)}
                            >
                                Удалить
                            </span>
                        </Popup>
                    </Marker>
                ))}
            {userLocations && (
                <Marker
                    position={userLocations}
                    icon={customIcon}
                >
                    <Popup>
                            <span
                                className='cursor-pointer'
                            >
                                Вы здесь
                            </span>
                    </Popup>
                </Marker>
            )}
        </>
    );
};

export default MarkersMap;