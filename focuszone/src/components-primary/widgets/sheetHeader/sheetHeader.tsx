import {
    Sheet
} from "@/components/ui/sheet.tsx";

import SheetInfo from "@/components-primary/entites/sheetInfo/sheetInfo.tsx";
import SheetBurger from "@/components-primary/entites/sheetBurger/sheetBurger";
import {useEffect, useState} from "react";

const SheetHeaderComponents = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        addEventListener("resize", handleResize);

        handleResize();

        return () => {
            removeEventListener("resize", handleResize);
        }
    });

    return (
        <div
            className='
                flex
                items-center justify-center gap-4
            '
        >
            <Sheet>
                <SheetInfo/>
            </Sheet>
            <div
                className='
                    flex
                    w-5 h-5
                    justify-end

                    sm:hidden
                '
            >
                {windowWidth < 640 &&
                    (
                        <SheetBurger/>
                    )
                }
            </div>
        </div>
    );
};

export default SheetHeaderComponents;