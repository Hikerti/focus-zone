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
    startPath: boolean
    titlePlaces: string[]
    flyToUser: boolean
    fitBounds: boolean
    urlScreen: string

    setCarWaypoints: (nowCarWaypoints: boolean) => void
    setWalkWaypoints: (nowWalkWaypoints: boolean) => void
    setStartPath: (start: boolean) => void
    setTitlePlaces: (titlePlace: string) => void
    setPoints: (point: LatLngLiteral) => void
    deletePoints: (pointDelete: LatLngLiteral, e: React.MouseEvent) => void
    setUserLocation: (point: LatLngLiteral) => void
    setTime: (time: number) => void
    setLength: (length: string) => void
    setSpeed: (speed: string) => void
    setFlyToUser: (flyToUser: boolean) => void
    setFitBounds: (fitBoundsNow: boolean) => void
    setUrlScreen: (urlScreen: string) => void
    setFullPoints: (fullPoints: LatLngLiteral[]) => void
}

export type RoutingProps = {
    waypoints: LatLngExpression[];
};