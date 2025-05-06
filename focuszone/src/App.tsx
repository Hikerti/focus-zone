import HomePage from "@/page/home/page.tsx";
import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router-dom";
import Layout from "@/page/layout/layout.tsx";
import MapPage from "@/page/map/page.tsx";
import ProfilePage from "@/page/profile/page.tsx";
import CafeList from "@/page/cafelist/page.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Navigate to="/home" replace />} />
                <Route path="home" element={<HomePage />} />
                <Route path="map" element={<MapPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="cafelist" element={<CafeList />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
