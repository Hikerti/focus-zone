import {create} from "zustand";
import {LatLngLiteral} from "leaflet";
import {UseMap} from "@/page/map/interface/interface.ts";
import * as React from "react";

export const useMapData = create<UseMap>((set, get) => ({
    points: [],
    userLocations: null,
    carWaypoints: false,
    walkWaypoints: false,
    time: 0,
    length: '0',
    speed: '0',

    setCarWaypoints: (nowCarWaypoints: boolean) => {
        set({carWaypoints: nowCarWaypoints})
    },
    setWalkWaypoints: (nowWalkWaypoints: boolean) => {
        set({walkWaypoints: nowWalkWaypoints})
    },

    setPoints: (point: LatLngLiteral) => {
        const currentPoints = get().points
        set({ points: [...currentPoints, point] });
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