import axios from "axios";
import {UserLogin} from "@/components-primary/widgets/forms/interface/interface.ts";


export const LoginUser = async (body: UserLogin) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/login', body)
        return response.data
    } catch (error) {
        console.log(error)
    }
}