import HomePage from "@/page/home/page.tsx";
import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router-dom";
import Layout from "@/page/layout/layout.tsx";
import MapPage from "@/page/map/page.tsx";
import ProfilePage from "@/page/profile/page.tsx";
import CafeList from "@/page/cafelist/page.tsx";
import CafeSinglePage from "@/page/cafeSinglePage/cafeSinglePage.tsx";
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import {useEffect} from "react";
import {useGetUser} from "@/helpers/store/storeUser.ts";
import axios from "axios";

function App() {
    const setUser = useGetUser(state => state.setUser)
    const login = localStorage.getItem("login");

    async function fetchUser() {
        try {
            const response = await axios.get('http://localhost:4000/auth/me', { withCredentials: true });
            console.log(response)
            if (response.data.status === 200) {}
            setUser(response.data.user);
        } catch (error) {
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

    useEffect(() => {
        if (login == 'true') {
            fetchUser();
        }
    }, []);


  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="home" element={<HomePage />} />
                <Route path="map" element={<MapPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="cafelist" element={<CafeList />} />
                <Route path="cafelist/:id" element={<CafeSinglePage/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
