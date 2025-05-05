import {Mail} from "lucide-react";
import {LinkToEmailProps} from "@/components-primary/shared/ui/interface/interface.ts";

const LinkToEmail = ({theme, content}: LinkToEmailProps) => {
    return (
        <a
            href={`mailto:` + content}
            className='flex items-center gap-2'
            target='_blank'
        >
            <Mail size={16} className={`${theme == 'dark' ? "text-zinc-900" : "text-white "} mt-1`}/>
            <span

                className={`${theme == 'dark' ? "text-zinc-900" : "text-white "} text-[16px]`}
            >
                {content}
            </span>
        </a>
    );
};

export default LinkToEmail;