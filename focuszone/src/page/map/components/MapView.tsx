import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import MapLayout from "@/page/map/components/MapLayout/MapLayout.tsx";
import {useMapData} from "@/page/map/store/store.ts";
import MarkersMap from "@/page/map/components/MarkersMap.tsx";
import {Routing} from "@/page/map/components/Routing/Routing.tsx";

const MapView = () => {

    const setPoint = useMapData(state => state.setPoints);
    const userLocations = useMapData(state => state.userLocations)
    const points = useMapData(state => state.points)


    const ClickHandler = () => {
        useMapEvents({
            click(e) {
                const newPoint = e.latlng;
                setPoint(newPoint)
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
                        {/* 📍 Здесь будут размещаться метки */}

                        {/* ➕ Здесь добавим обработчик кликов по карте */}

                        {/* 🔀 Здесь будет компонент построения маршрутов */}
                        <span className='absolute bottom-0 right-0 w-[100px] h-[20px] z-[1100] bg-white'>032442</span>
                    </MapContainer>
                </MapLayout>
            }
        </>
    );
};

export default MapView;