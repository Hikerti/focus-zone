import {Mail} from "lucide-react";

import {Button} from "@/components/ui/button.tsx";

const MessageButton = (props: any) => {
    return (
        <>
            <Button
                size='icon'
                className='
                border-zinc-900 border-2
                bg-transparent
                hover:bg-white
                cursor-pointer group
                '
                {...props}
            >
                <Mail
                    className='
                    text-zinc-900 bg-white
                    transition
                    '
                />
            </Button>
        </>
    );
};

export default MessageButton;