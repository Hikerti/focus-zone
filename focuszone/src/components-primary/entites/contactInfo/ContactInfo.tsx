import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";

import { ContactInfoProps } from "./interface/inetrface";

const ContactInfo = ({email, adress, phone}: ContactInfoProps) => {
    return (
        <div
            className='
                flex
                mt-4
                flex-col gap-2
            '
        >
            <h3>
                Контактная информация
            </h3>
            <LinkToEmail
                size={16}
                theme={'dark'}
                content={email}
            />
            <LinkToMap
                size={16}
                theme={'dark'}
                content={adress}
            />
            <LinkToTel
                size={16}
                theme={'dark'}
                content={phone}
            />
        </div>
    );
};

export default ContactInfo;