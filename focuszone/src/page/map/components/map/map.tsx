import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import {LatLng, LatLngBounds, LatLngExpression} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useState, useRef} from "react";
import ChangeMapView from "@/page/map/components/map/componets/changeMapView.tsx";
import MapClick from "@/page/map/components/map/componets/mapClick.tsx";
import axios from "axios";
import {Button} from "@/components/ui/button.tsx";

const Map = () => {
    const [userPosition, setUserPosition] = useState<LatLngExpression | null>(null);
    const [mapMarker, setMapMarker] = useState<LatLngExpression[]>([]);
    const [routeCoordsCars, setRouteCoordsCars] = useState<LatLngExpression[]>([]);
    const [routeCoordsWalk, setRouteCoordsWalk] = useState<LatLngExpression[]>([]);
    const mapRef = useRef<any>(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords: LatLngExpression = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];
                setUserPosition(coords);
                setMapMarker(prev => [...prev, coords])
            },
            (error) => {
                console.error('Ошибка геолокации:', error);
            }
        );
    }, []);

    useEffect(() => {
        if (mapRef.current && mapMarker.length > 0) {
            const bounds = new LatLngBounds(mapMarker);
            mapRef.current.fitBounds(bounds);
        }
    }, [mapMarker]);

    const fetchRoute = async () => {
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
            console.log(auto.data);
            const coordsAuto = auto.data.features[0].geometry.coordinates.map(
                ([lng, lat]: number[]) => [lat, lng]
            );
            const coordsWalk = walk.data.features[0].geometry.coordinates.map(
                ([lng, lat]: number[]) => [lat, lng]
            );
            setRouteCoordsCars(coordsAuto);
            setRouteCoordsWalk(coordsWalk);
        } catch (err) {
            console.error('Ошибка маршрута:', err);
        }
    };

    const defaultPosition: LatLngExpression = [55.751244, 37.618423];

    const handelMap = (latlng: LatLng) => {
        setMapMarker(prev => [...prev, [latlng.lat, latlng.lng]]);
    }

    return (
        <>
            <section className='w-9/10 h-[600px] mt-10 flex flex-col gap-4'>
                <MapContainer
                    center={userPosition || defaultPosition}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    ref={mapRef}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap contributors'
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
                <Button onClick={fetchRoute}>Построить маршрут</Button>
            </section>
        </>
    );
};

export default Map;