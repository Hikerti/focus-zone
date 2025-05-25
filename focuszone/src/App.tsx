import {Routes, Navigate} from "react-router-dom";
import {Route} from "react-router-dom";

import {lazy, Suspense, useEffect} from "react";
import {ErrorBoundary} from "react-error-boundary";

import {useGetUser} from "@/helpers/store/storeUser.ts";

import {ErrorPage} from "@/page/errorPage/errorPage.tsx";
import SuspenseLoading from "@/components-primary/entites/suspenceLoading/suspenseLoading.tsx";
import FetchUser from "@/helpers/functions/fetchUser";

const HomePage = lazy(() => import('@/page/home/page.tsx'));
const Layout = lazy(() => import('@/page/layout/layout.tsx'));
const MapPage = lazy(() => import('@/page/map/page.tsx'));
const ProfilePage = lazy(() => import('@/page/profile/page.tsx'));
const CafeList = lazy(() => import('@/page/cafelist/page.tsx'));
const CafeSinglePage = lazy(() => import('@/page/cafeSinglePage/cafeSinglePage.tsx'));

function App() {

    const users = useGetUser(state => state.users);

    const login = localStorage.getItem("login");

    const fetchUser = FetchUser()

    useEffect(() => {
        if (login == 'true' && users && users.length == 0) {
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
