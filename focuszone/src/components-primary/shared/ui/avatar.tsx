import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx"

import { AvatarComponentProps } from "./interface/interface";
import React from "react";

const AvatarComponent: React.FC<AvatarComponentProps> = ({size, url}) => {
    return (
        <>
            {
                url &&
            <>
                <Avatar className={size}>
                    <AvatarImage
                        src={url}
                        alt="User avatar"
                    />
                    <AvatarFallback>
                        CN
                    </AvatarFallback>
                </Avatar>
            </>
            }
        </>
    );
};

export default AvatarComponent
