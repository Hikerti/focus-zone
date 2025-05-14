import {create} from "zustand";
import {LatLngLiteral} from "leaflet";
import {UseMap} from "@/page/map/interface/interface.ts";
import * as React from "react";

export const useMap = create<UseMap>((set, get) => ({
    points: [],
    userLocations: null,

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
    }
}))