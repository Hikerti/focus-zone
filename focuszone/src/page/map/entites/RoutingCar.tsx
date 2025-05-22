import { useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet-routing-machine";

import { useEffect } from "react";

import { RoutingProps } from "@/page/map/interface/interface.ts";
import { useMapData } from "@/page/map/store/store.ts";

const RoutingCar = ({ waypoints }: RoutingProps) => {

    const map = useMap();

    const setTime = useMapData((state) => state.setTime);
    const setLength = useMapData((state) => state.setLength);

    useEffect(() => {
        if (!map || waypoints.length < 2) return;

        const routingControl = L.Routing.control({
            waypoints: waypoints.map((point) => L.latLng(point)),
            lineOptions: {
                styles: [{ color: "blue", opacity: 0.6, weight: 5 }],
                extendToWaypoints: true,
                missingRouteTolerance: 20,
            },
            router: L.Routing.osrmv1({
                serviceUrl: 'https://router.project-osrm.org/route/v1'
            }),
            show: false,
            addWaypoints: false,
        }).addTo(map);

        routingControl.on("routesfound", function (e: any) {
            const route = e.routes[0];
            const distanceKilometer = (route.summary.totalDistance / 1000).toFixed(2);
            const timeMinute = Math.round(Number(distanceKilometer))

            setTime(timeMinute);
            setLength(distanceKilometer);
        });

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints]);

    return null;
};

export default RoutingCar;
