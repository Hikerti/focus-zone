import {useMap} from "react-leaflet";
import {useEffect} from "react";
import L from "leaflet";
import {RoutingProps} from "@/page/map/interface/interface.ts";

const RoutingWalk = ({ waypoints }: RoutingProps) => {
    const map = useMap();

    useEffect(() => {
        if (!map || waypoints.length < 2) return;

        const routingControl = L.Routing.control({
            waypoints: waypoints.map((point) => L.latLng(point)),
            lineOptions: {
                styles: [{ color: "blue", opacity: 0.6, weight: 5 }],
            },
            router: L.Routing.osrmv1({
                serviceUrl: "https://router.project-osrm.org/route/v1/foot",
            }),
            show: false,
            addWaypoints: false,
            draggableWaypoints: false
        }).addTo(map);

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints]);

    return null;
};

export default RoutingWalk;