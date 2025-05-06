import {MapPin} from "lucide-react";
import {Link} from "@/components-primary/shared/ui/interface/interface.ts";

const LinkToMap = ({theme, content, size}: Link) => {
    return (
        <a
            href='https://www.google.ru/maps/place/%D1%83%D0%BB.+%D0%94%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2,+38,+%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,+%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+617766/@56.7409582,54.1487924,17z/data=!3m1!4b1!4m6!3m5!1s0x43e72be81889c8ab:0xcf94f0c6f7b1e61d!8m2!3d56.7409553!4d54.1513673!16s%2Fg%2F11lmqt_m3v?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'
            className='flex items-center gap-2'
            target='_blank'
        >
            <MapPin size={size} className='mt-1'/>
            <span

                className={`${theme == 'dark' ? "text-zinc-900" : "text-white "}text-zinc-900 text-[${size}px]`}
            >
                {content}
            </span>
        </a>
    );
};

export default LinkToMap;