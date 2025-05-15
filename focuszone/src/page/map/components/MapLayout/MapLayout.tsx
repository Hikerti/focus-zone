import {ReactNode} from "react";
import SideBarMapLayout from "@/page/map/components/MapLayout/components/SideBarMapLayout.tsx";
import BottomBarMapLayout from "@/page/map/components/MapLayout/components/BottomBarMapLayout.tsx";

const MapLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <div className='w-9/10 h-[800px] flex flex-col relative border-zinc-900 border-2'>
                <SideBarMapLayout>
                    {children}
                </SideBarMapLayout>
                <BottomBarMapLayout></BottomBarMapLayout>
            </div>
        </>
    );
};

export default MapLayout;