import {Outlet} from "react-router-dom";
import Header from "@/components-primary/widgets/header/header.tsx";
import Footer from "@/components-primary/widgets/footer/footer.tsx";
import { Toaster } from "@/components/ui/sonner"
import {useGetUser} from "@/helpers/store/storeUser.ts";


const Layout = () => {
    const users = useGetUser(state => state.users);
    console.log(users)

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