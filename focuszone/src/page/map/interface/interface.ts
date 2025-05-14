import {LatLngLiteral} from "leaflet";
import * as React from "react";

export interface UseMap {
    points: LatLngLiteral[],
    userLocations: LatLngLiteral | null,
    setPoints: (point: LatLngLiteral) => void
    deletePoints: (pointDelete: LatLngLiteral, e: React.MouseEvent) => void
    setUserLocation: (point: LatLngLiteral) => void
}