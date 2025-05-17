import Map from "@/page/map/widgets/Map/Map.tsx";
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

export default function MapPage() {
  return (
    <>
      <Map></Map>
    </>
  );
}
