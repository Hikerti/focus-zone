import React, {ReactNode} from "react";
import SideBarMapLayout from "@/page/map/entites/SideBarMapLayout.tsx";
import BottomBarMapLayout from "@/page/map/entites/BottomBarMapLayout.tsx";

const MapLayout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <div
                className='w-9/10 h-[810px] flex flex-col relative border-zinc-900 border-2'
            >
                <SideBarMapLayout>
                    {children}
                </SideBarMapLayout>
                <BottomBarMapLayout/>
            </div>
        </>
    );
};

export default MapLayout;