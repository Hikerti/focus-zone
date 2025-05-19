import React, {useEffect} from 'react';
import { useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import {useMapData} from "@/page/map/store/store.ts";
import {LatLng} from "@/page/map/type/type.ts";

export const FitBounds: React.FC<{ positions: LatLng[] }> = ({ positions }) => {
    const map = useMap();
    const setFitBounds = useMapData(state => state.setFitBounds)

    useEffect(() => {
        if (positions.length > 0) {
            const bounds = L.latLngBounds(positions.map(p => [p.lat, p.lng] as LatLngExpression));
            map.fitBounds(bounds, { padding: [50, 50] });
            setFitBounds(false)
        }
    }, [positions, map]);

    return null;
};