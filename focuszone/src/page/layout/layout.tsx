import {Outlet} from "react-router-dom";
import Header from "@/components-primary/widgets/header/header.tsx";
import Footer from "@/components-primary/widgets/footer/footer.tsx";
import { Toaster } from "@/components/ui/sonner"
import {useGetUser} from "@/helpers/store/storeUser.ts";
import {useEffect} from "react";
import {UserFullData} from "@/helpers/interface/interface/interface.ts";


const Layout = () => {
    const setUser = useGetUser(state => state.setUser);

    useEffect(() => {
        const data = localStorage.getItem('user');
        if (data) {
            try {
                const parsedData: UserFullData = JSON.parse(data);
                setUser(parsedData);
            } catch (e) {
                console.error('Ошибка при парсинге user из localStorage:', e);
            }
        }
    }, []);

    return (
        <>
            <Header></Header>
            <main className='w-[100%] relative z-20 flex flex-col items-center'>
                <Outlet />
            </main>
            <Toaster />
            <Footer></Footer>
        </>
    );
};

export default Layout;