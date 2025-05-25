import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import React from "react";

interface MessageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: string
}

const MessageButton: React.FC<MessageButtonProps> = ({theme, ...props}) => {
    return (
        <>
            <Button
                size='icon'
                className={`
                    ${theme === "dark" ? "border-white hover:bg-zinc-800" : "border-zinc-900 hover:bg-white "}
                    border-2
                    bg-transparent
                    hover:bg-white
                    cursor-pointer group
                `}
                {...props}
            >
                <Mail
                    className={`
                        ${theme === "dark" ? "text-white bg-zinc-900" : "border-zinc-900 text-zinc-900 bg-white"}
                        transition
                    `}

                />
            </Button>
        </>
    );
};

export default MessageButton;