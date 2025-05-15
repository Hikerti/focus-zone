import {LatLngExpression, LatLngLiteral} from "leaflet";
import * as React from "react";

export interface UseMap {
    points: LatLngLiteral[],
    userLocations: LatLngLiteral | null,
    carWaypoints: boolean
    walkWaypoints: boolean
    time: number
    length: string
    speed: string
    setCarWaypoints: (nowCarWaypoints: boolean) => void
    setWalkWaypoints: (nowWalkWaypoints: boolean) => void
    setPoints: (point: LatLngLiteral) => void
    deletePoints: (pointDelete: LatLngLiteral, e: React.MouseEvent) => void
    setUserLocation: (point: LatLngLiteral) => void
    setTime: (time: number) => void
    setLength: (length: string) => void
    setSpeed: (speed: string) => void
}

export type RoutingProps = {
    waypoints: LatLngExpression[];
};