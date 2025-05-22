import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";

import {useMapData} from "@/page/map/store/store.ts";

import MarkersMap from "@/page/map/widgets/MarkersMap/MarkersMap.tsx";
import {Routing} from "@/page/map/widgets/Routing/Routing.tsx";
import MapLayout from "@/page/map/widgets/MapLayout/MapLayout.tsx";
import FlyToUser from "@/page/map/entites/FlyToUser.tsx";

import { FitBounds } from "../../entites/FitBounds";

const MapView = () => {

    const flyToUser = useMapData(state => state.flyToUser);
    const setPoint = useMapData(state => state.setPoints);
    const userLocations = useMapData(state => state.userLocations)
    const points = useMapData(state => state.points)
    const setTitlePlaces = useMapData(state => state.setTitlePlaces)

    const ClickHandler = () => {
        useMapEvents({
            click(e) {
                const newPoint = e.latlng;
                setPoint(newPoint)
                setTitlePlaces('Маркер')
            },
        });
        return null;
    };

    return (
        <>
            {userLocations &&
                <MapLayout>
                    <div
                        className='
                            w-full
                            flex
                            justify-center
                        '
                        id='map_container'
                    >
                        <MapContainer
                            center={userLocations}
                            zoom={13}
                            scrollWheelZoom={true}
                            style={{ width: '100%', height: '100%'}}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <ClickHandler />
                            <MarkersMap/>
                            <Routing
                                waypoints={[userLocations,...points]}
                            >
                            </Routing>
                            {flyToUser && <FlyToUser/>}
                            <FitBounds
                                positions={[userLocations, ...points]}
                            />
                            <span
                                className='
                                    absolute bottom-0 right-0 z-[1100]
                                    w-[80px] h-[20px]
                                    bg-white
                                '
                            >
                                {userLocations.lng}
                            </span>
                            <span
                                className='
                                    absolute bottom-5 right-0 z-[1100]
                                    w-[80px] h-[20px]
                                    bg-white
                                '
                            >
                                {userLocations.lat}
                            </span>
                        </MapContainer>
                    </div>
                </MapLayout>
            }
        </>
    );
};

export default MapView;