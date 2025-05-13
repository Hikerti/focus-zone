import {LatLng} from "leaflet";
import {useMapEvents} from "react-leaflet";

const MapClick = ({onMapClick}: {onMapClick: (latlng: LatLng) => void}) => {
    useMapEvents({
        click(e) {
            onMapClick(e.latlng);
        },
    });
    return (
        null
    );
};

export default MapClick;