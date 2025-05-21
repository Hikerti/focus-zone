import {Mail} from "lucide-react";

import { Link } from "./interface/interface";
import React from "react";

const LinkToEmail: React.FC<Link> = ({theme, content, size}) => {
    return (
        <a
            href={`mailto:` + content}
            className='flex items-center gap-2'
            target='_blank'
        >
            <Mail
                size={size}
                className={`
                ${theme == 'dark' ? "text-zinc-900" : "text-white "} 
                mt-1
                `}
            />
            <span

                className={`
                ${theme == 'dark' ? "text-zinc-900" : "text-white "} 
                text-[${size}px]
                `}
            >
                {content}
            </span>
        </a>
    );
};

export default LinkToEmail;