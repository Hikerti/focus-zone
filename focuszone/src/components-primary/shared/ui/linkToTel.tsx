import {PhoneOutgoing} from "lucide-react";
import { Link } from "./interface/interface";

const LinkToTel = ({theme, content, size}: Link) => {
    return (
        <a
            href={'tel:' + content?.replace(/\s+/g, '')}
            className='flex items-center gap-2'
            target='_blank'
        >
            <PhoneOutgoing size={size} className={`mt-1 ${theme == 'dark' ? "text-zinc-900" : "text-white "}`}/>
            <span
                className={`${theme == 'dark' ? "text-zinc-900" : "text-white "} text-[${size}px]`}
            >
                {content}
            </span>
        </a>
    );
};

export default LinkToTel;