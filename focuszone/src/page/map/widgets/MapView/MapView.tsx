import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import {useMapData} from "@/page/map/store/store.ts";
import MarkersMap from "@/page/map/widgets/MarkersMap/MarkersMap.tsx";
import {Routing} from "@/page/map/widgets/Routing/Routing.tsx";
import MapLayout from "@/page/map/widgets/MapLayout/MapLayout.tsx";

const MapView = () => {

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
                    <MapContainer
                        center={userLocations}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{ width: '80%', height: '100%'}}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <ClickHandler />
                        <MarkersMap></MarkersMap>
                        <Routing
                            waypoints={[userLocations,...points]}
                        >
                        </Routing>
                        <span className='absolute bottom-0 right-0 w-[80px] h-[20px] z-[1100] bg-white'>{userLocations.lng}</span>
                        <span className='absolute bottom-5 right-0 w-[80px] h-[20px] z-[1100] bg-white'>{userLocations.lat}</span>
                    </MapContainer>
                </MapLayout>
            }
        </>
    );
};

export default MapView;