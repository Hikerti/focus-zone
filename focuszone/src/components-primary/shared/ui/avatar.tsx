import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx"
import { AvatarComponentProps } from "./interface/interface";

export default function AvatarComponent({size, url}: AvatarComponentProps) {
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
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </>
            }
        </>
    );
};
