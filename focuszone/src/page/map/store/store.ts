import {create} from "zustand";
import {LatLngLiteral} from "leaflet";
import {UseMap} from "@/page/map/interface/interface.ts";
import * as React from "react";

export const useMapData = create<UseMap>((set, get) => ({
    points: [],
    userLocations: null,
    carWaypoints: true,
    walkWaypoints: false,
    startPath: false,
    time: 0,
    length: '0',
    speed: '0',
    titlePlaces: [],

    setCarWaypoints: (nowCarWaypoints: boolean) => {
        set({carWaypoints: nowCarWaypoints})
    },
    setWalkWaypoints: (nowWalkWaypoints: boolean) => {
        set({walkWaypoints: nowWalkWaypoints})
    },
    setStartPath: (start: boolean) => {
        set({startPath: start})
    },
    setPoints: (point: LatLngLiteral) => {
        const currentPoints = get().points
        set({ points: [...currentPoints, point] });
    },
    setTitlePlaces: (titlePlace: string) => {
        const currentTitlePlaces = get().titlePlaces
        set({titlePlaces: [...currentTitlePlaces, titlePlace]})
    },
    deletePoints: (pointDelete: LatLngLiteral, e: React.MouseEvent) => {
        const currentPoints = get().points;
        const filterPoints = currentPoints.filter((point) => point !== pointDelete);
        set({ points: filterPoints });
        e.stopPropagation()
    },
    setUserLocation: (point: LatLngLiteral) => {
        set({ userLocations: point });
    },
    setTime: (time: number) => {
        set({time });
    },
    setLength: (length: string) => {
        set({length});
    },
    setSpeed: (speed: string) => {
        set({speed});
    }
}))