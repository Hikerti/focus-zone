import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser.ts";

export const useLogout = () => {
    const setLogin = useGetUser(state => state.setLogin);
    const logoutUser = async () => {
    try {
        console.log('Пользователь успешно вышел');
        setLogin(false)
        await axios.post('http://localhost:4000/auth/logout', null, {
            withCredentials: true,
        });
        window.location.reload();
    } catch (error) {
        throw new Error('Пользователь не смог выйти: ' + error);
    }
    }
    return logoutUser
}