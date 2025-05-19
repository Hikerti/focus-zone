import L, {LatLngExpression} from 'leaflet';

export const isWithinRadius = (userPos: LatLngExpression, point: LatLngExpression, radius = 20) => {
    const distance = L.latLng(userPos).distanceTo(L.latLng(point));
    return distance <= radius;
};