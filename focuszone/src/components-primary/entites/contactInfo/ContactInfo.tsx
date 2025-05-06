import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";
import { ContactInfoProps } from "./interface/inetrface";

const ContactInfo = ({email, adress, phone}: ContactInfoProps) => {
    return (
        <div className='flex flex-col gap-2 mt-4'>
            <h3>Контактная информация</h3>
            <LinkToEmail theme={'dark'} content={email}></LinkToEmail>
            <LinkToMap theme={'dark'} content={adress}></LinkToMap>
            <LinkToTel theme={'dark'} content={phone}></LinkToTel>
        </div>
    );
};

export default ContactInfo;