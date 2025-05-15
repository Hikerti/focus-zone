import { useEffect } from "react";
import { useMapData } from "@/page/map/store/store.ts";

export const useUserLocation = () => {
    const setUserLocation = useMapData(state => state.setUserLocation);
    const setSpeed = useMapData(state => state.setSpeed);

    useEffect(() => {
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером");
            return;
        }

        const watcherId = navigator.geolocation.watchPosition(
            (position) => {
                const { latitude: lat, longitude: lng, speed } = position.coords;
                const speedKmh = speed !== null ? (speed * 3.6).toFixed(2) : "Неизвестна";
                setUserLocation({ lat, lng });
                setSpeed(speedKmh)
            },
            (error) => {
                console.error("Ошибка геолокации:", error);
                alert("Не удалось определить местоположение");
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000,
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watcherId);
        };
    }, [setUserLocation]);

    return null;
};
