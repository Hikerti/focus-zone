import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import {LatLng, LatLngBounds, LatLngExpression} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useState, useRef} from "react";
import ChangeMapView from "@/page/map/components/changeMapView/changeMapView.tsx";
import MapClick from "@/page/map/components/mapClick/mapClick.tsx";
import axios from "axios";
import {Button} from "@/components/ui/button.tsx";
import { toPng } from 'html-to-image';

const Map = () => {
    const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);
    const [mapMarker, setMapMarker] = useState<LatLngExpression[]>([]);
    const [routeCoordsCars, setRouteCoordsCars] = useState<LatLngExpression[]>([]);
    const [routeCoordsWalk, setRouteCoordsWalk] = useState<LatLngExpression[]>([]);
    const mapRef = useRef<any>(null)
    const containerMapRef = useRef<any>(null)

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const coords: LatLngExpression = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];
                setUserPosition(coords);
            },
            (error) => {
                console.error('Ошибка геолокации:', error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 10000,
                timeout: 5000,
            }
        )

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };

    }, []);

    useEffect(() => {
        if (mapRef.current && mapMarker.length > 0) {
            const allMarkers = [
                ...mapMarker,
                ...routeCoordsCars,
                ...routeCoordsWalk,
            ]
            const bounds = new LatLngBounds(allMarkers);
            mapRef.current.fitBounds(bounds);
        }
    }, [mapMarker, routeCoordsCars, routeCoordsWalk]);

    const fetchRouteCars = async () => {
        if (mapMarker.length < 2) return;
        console.log("Маршруты:", mapMarker);
        try {
            const coordsForRoute = mapMarker.map(([lat, lng]) => [lng, lat]);
            const auto = await axios.post(
                'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
                {
                    coordinates: coordsForRoute,
                },
                {
                    headers: {
                        Authorization: '5b3ce3597851110001cf6248e094c1c3e4594d1a92bf6bf2bd2e8265',
                        'Content-Type': 'application/json',
                    },
                });
            console.log(auto.data);
            if (auto.data.features && auto.data.features[0]) {
                const coordsAuto = auto.data.features[0].geometry.coordinates.map(
                    ([lng, lat]: number[]) => [lat, lng]
                );
                setRouteCoordsCars(coordsAuto);
                setRouteCoordsWalk([]);
                const imageUrl = await toPng(containerMapRef.current!);
                if (!containerMapRef.current) return;
                console.log(imageUrl);
            }
        } catch (err) {
            console.error('Ошибка маршрута:', err);
        }
    };

    const fetchRouteWalk = async () => {
        if (mapMarker.length < 2) return;
        console.log("Маршруты:", mapMarker);
        try {
            const coordsForRoute = mapMarker.map(([lat, lng]) => [lng, lat]);
            const walk = await axios.post(
                'https://api.openrouteservice.org/v2/directions/foot-walking/geojson',
                {
                    coordinates: coordsForRoute,
                },
                {
                    headers: {
                        Authorization: '5b3ce3597851110001cf6248e094c1c3e4594d1a92bf6bf2bd2e8265',
                        'Content-Type': 'application/json',
                    },
                });
            if (walk.data.features && walk.data.features[0]) {
                const coordsWalk = walk.data.features[0].geometry.coordinates.map(
                    ([lng, lat]: number[]) => [lat, lng]
                );
                setRouteCoordsWalk(coordsWalk);
                setRouteCoordsCars([]);
                const imageUrl = await toPng(containerMapRef.current!);
                if (!containerMapRef.current) return;
                console.log(imageUrl);
            }
        } catch (err) {
            console.error('Ошибка маршрута:', err);
        }
    };

    const defaultPosition: LatLngExpression = [55.751244, 37.618423];

    const handelMap = async (latlng: LatLng) => {
        setMapMarker(prev => [...prev, [latlng.lat, latlng.lng]]);
    }

    return (
        <>
            <section className='w-9/10'>
                <div
                    className='w-full h-[600px] mt-10 flex flex-col gap-4'
                    ref={containerMapRef}
                >
                    <MapContainer
                        center={userPosition || defaultPosition}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }}
                        id="map"
                        ref={mapRef}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {userPosition && <ChangeMapView center={userPosition} />}
                        {userPosition &&
                            <Marker position={userPosition}>
                                <Popup>Ваше местоположение</Popup>
                            </Marker>
                        }
                        <MapClick
                            onMapClick={handelMap}
                        />
                        {mapMarker?.map((pos, index) => (
                            <Marker key={index} position={pos}>
                                <Popup>Метка #{index + 1}</Popup>
                            </Marker>
                        ))}

                        {routeCoordsCars.length > 0 && (
                            <Polyline positions={routeCoordsCars} color="blue" />
                        )}
                        {routeCoordsWalk.length > 0 && (
                            <Polyline positions={routeCoordsWalk} color="green" />
                        )}
                        routeCoordsWalk
                    </MapContainer>
                    <Button onClick={fetchRouteCars}>Построить маршрут для машины</Button>
                    <Button onClick={fetchRouteWalk}>Построить маршрут для пешехода</Button>
                </div>
            </section>
        </>
    );
};

export default Map;