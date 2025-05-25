import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser";

const FetchUser = () => {
    const setUser = useGetUser(state => state.setUser)

    async function fetchUser() {
        try {
            const response = await axios.get('http://localhost:4000/auth/me', { withCredentials: true });
            if (response.data.status === 200) {}
            setUser(response.data.user);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    try {
                        const refreshResponse = await axios.post('http://localhost:4000/auth/refresh', {}, { withCredentials: true });
                        setUser(refreshResponse.data.user);
                    } catch {
                        console.error(error);
                    }
                } else {
                    console.error(error);
                }
            }
        }
    }

    return fetchUser;
};

export default FetchUser;