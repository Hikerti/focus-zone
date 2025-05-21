import {Outlet} from "react-router-dom";
import Header from "@/components-primary/widgets/header/header.tsx";
import Footer from "@/components-primary/widgets/footer/footer.tsx";
import { Toaster } from "@/components/ui/sonner"

const Layout = () => {
    return (
        <>
            <Header/>
            <main
                className='relative flex flex-col items-center mt-[68px]'
            >
                <Outlet />
            </main>
            <Toaster />
            <Footer></Footer>
        </>
    );
};

export default Layout;