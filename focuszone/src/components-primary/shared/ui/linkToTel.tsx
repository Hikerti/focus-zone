import {PhoneOutgoing} from "lucide-react";
import { LinkToTelProps } from "./interface/interface";

const LinkToTel = ({theme, content}: LinkToTelProps) => {
    return (
        <a
            href={'tel:' + content?.replace(/\s+/g, '')}
            className='flex items-center gap-2'
            target='_blank'
        >
            <PhoneOutgoing size={16} className={`mt-1 ${theme == 'dark' ? "text-zinc-900" : "text-white "}`}/>
            <span
                className={`${theme == 'dark' ? "text-zinc-900" : "text-white "} text-[16px]`}
            >
                {content}
            </span>
        </a>
    );
};

export default LinkToTel;