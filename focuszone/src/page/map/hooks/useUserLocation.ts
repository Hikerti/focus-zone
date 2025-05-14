import {useMap} from "@/page/map/store/store.ts";

export const useUserLocation  = () => {
    const setUserLocation = useMap(state => state.setUserLocation);

    const getUserLocation = () => {
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude: lat, longitude: lng } = position.coords;
                setUserLocation({lat, lng});
            },
            (error) => {
                console.error("Ошибка геолокации:", error);
                alert("Не удалось определить местоположение");
            }
        );
    }

    return { getUserLocation };
};