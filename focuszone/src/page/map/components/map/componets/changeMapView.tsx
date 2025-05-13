import {LatLngExpression} from "leaflet";
import {useMap} from "react-leaflet";

const ChangeMapView = ({ center }: { center: LatLngExpression }) => {
    const map = useMap();
    map.setView(center);
    return null;
};

export default ChangeMapView;