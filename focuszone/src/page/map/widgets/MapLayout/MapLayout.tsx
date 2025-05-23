import React, {ReactNode} from "react";
import SideBarMapLayout from "@/page/map/entites/SideBarMapLayout.tsx";
import BottomBarMapLayout from "@/page/map/entites/BottomBarMapLayout.tsx";

const MapLayout: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <div
                className='
                    relative
                    w-full h-screen
                    flex
                    flex-col
                '
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