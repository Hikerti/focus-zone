import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar.tsx"

type AvatarComponentProps = {
    size?: string;
};

export default function AvatarComponent({size}: AvatarComponentProps) {
    return (
        <>
            <Avatar className={size}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </>
    );
};
