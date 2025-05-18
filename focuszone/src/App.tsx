import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router-dom";

import {lazy, Suspense, useEffect} from "react";
import axios from "axios";
import {ErrorBoundary} from "react-error-boundary";

import {useGetUser} from "@/helpers/store/storeUser.ts";

import {ErrorPage} from "@/page/errorPage/errorPage.tsx";
import SuspenseLoading from "@/components-primary/entites/suspenceLoading/suspenseLoading.tsx";

const HomePage = lazy(() => import('@/page/home/page.tsx'));
const Layout = lazy(() => import('@/page/layout/layout.tsx'));
const MapPage = lazy(() => import('@/page/map/page.tsx'));
const ProfilePage = lazy(() => import('@/page/profile/page.tsx'));
const CafeList = lazy(() => import('@/page/cafelist/page.tsx'));
const CafeSinglePage = lazy(() => import('@/page/cafeSinglePage/cafeSinglePage.tsx'));

function App() {
    const setUser = useGetUser(state => state.setUser)
    const login = localStorage.getItem("login");

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

    useEffect(() => {
        if (login == 'true') {
            fetchUser();
        }
    }, []);


  return (
    <>
        <ErrorBoundary
            FallbackComponent={ErrorPage}
        >
            <Suspense fallback={<SuspenseLoading />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate to="home" replace />} />
                        <Route path="home" element={<HomePage />} />
                        <Route path="map" element={<MapPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="cafelist" element={<CafeList />} />
                        <Route path="cafelist/:id" element={<CafeSinglePage />} />
                    </Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default App
