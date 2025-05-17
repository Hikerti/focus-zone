import axios from "axios";
import {UserLogin} from "@/components-primary/widgets/forms/interface/interface.ts";
import {useGetUser} from "@/helpers/store/storeUser.ts";


export const LoginUser = async (body: UserLogin) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/login', body, {
            withCredentials: true,
        })
        const { user } = response.data;
        useGetUser.getState().setUser(user);
        return response.data
    } catch (error) {
        console.log(error)
    }
}