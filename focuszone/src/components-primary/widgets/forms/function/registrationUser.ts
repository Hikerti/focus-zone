import axios from "axios";
import {UserRegistration} from "@/components-primary/widgets/forms/interface/interface.ts";


export const RegistrationUser = async (body: UserRegistration) => {
    try {
        const response = await axios.post('http://localhost:4000/auth/register', body)
        return response.data
    } catch (error) {
        console.log(error)
    }
}