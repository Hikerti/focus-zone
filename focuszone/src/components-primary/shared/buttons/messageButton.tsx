import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const MessageButton = (props: any) => {
    return (
        <>
            <Button
                size='icon'
                className='border-zinc-900 bg-transparent border-2 hover:bg-white cursor-pointer  group'
                {...props}
            >
                <Mail
                    className='text-zinc-900 transition bg-white'
                />
            </Button>
        </>
    );
};

export default MessageButton;