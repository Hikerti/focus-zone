import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine"; // важно импортировать сам плагин
import { RoutingProps } from "@/page/map/interface/interface.ts";
import { useMapData } from "@/page/map/store/store.ts";

const RoutingWalk = ({ waypoints }: RoutingProps) => {
    const map = useMap();
    const setTime = useMapData(state => state.setTime);
    const setLength = useMapData(state => state.setLength);

    useEffect(() => {
        if (!map || !waypoints || waypoints.length < 2) return;

        const latLngWaypoints = waypoints.map((point) =>
            Array.isArray(point)
                ? L.latLng(point[0], point[1])
                : L.latLng(point.lat, point.lng)
        );

        const routingControl = L.Routing.control({
            waypoints: latLngWaypoints,
            lineOptions: {
                styles: [{ color: "green", opacity: 0.6, weight: 5 }],
                extendToWaypoints: true,
                missingRouteTolerance: 20,
            },
            router: L.Routing.osrmv1({
                serviceUrl: "https://router.project-osrm.org/route/v1",
                profile: "foot"
            }),
            show: false,
            addWaypoints: false,
            routeWhileDragging: false,
        }).addTo(map);

        routingControl.on("routesfound", (e: any) => {
            const route = e.routes[0];
            if (!route) return;

            const distanceKilometer = (route.summary.totalDistance / 1000).toFixed(2);
            const timeMinute = Math.round(route.summary.totalTime);

            setTime(timeMinute);
            setLength(distanceKilometer);
        });

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints, setTime, setLength]);

    return null;
};

export default RoutingWalk;
