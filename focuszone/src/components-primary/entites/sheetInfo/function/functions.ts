import axios from "axios";

export const logoutUser = async () => {
    try {
        console.log('Пользователь успешно вышел')
        localStorage.removeItem('user');
        window.location.reload();
        return await axios.post('http://localhost:4000/auth/logout')
    } catch (error) {
        throw new Error('Пользователь не смог выйти' + error)
    }
}