import axios from "axios";
import {UserRegistration} from "@/components-primary/widgets/forms/interface/interface.ts";
import {useGetUser} from "@/helpers/store/storeUser.ts";


export const RegistrationUser = async (body: UserRegistration) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/register', body)
        const { user, accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        useGetUser.getState().setUser(user);
        return response.data
    } catch (error) {
        console.log(error)
    }
}