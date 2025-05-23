import {Button} from "@/components/ui/button";

import {ChevronUp} from "lucide-react";

import {ArrowRotateProps} from "@/page/map/interface/interface";

const ArrowRotate = ({setShowInfo, showInfo}: ArrowRotateProps) => {
    return (
        <div
            className='
                    flex
                    items-center justify-center
                '
        >
            <Button
                onClick={() => {setShowInfo(!showInfo)}}
            >
                <ChevronUp
                    className={`
                        ${showInfo && 'rotate-180'} 
                        text-white 
                        transition-transform duration-300
                    `
                }
                />
            </Button>
        </div>
    );
};

export default ArrowRotate;