import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";

const ContactInfo = () => {
    return (
        <div className='flex flex-col gap-2 mt-4'>
            <h3>Контактная информация</h3>
            <LinkToEmail theme={'dark'} content={'anikaev2007@gmail.com'}></LinkToEmail>
            <LinkToMap theme={'dark'} content={'г. Чайковский, ул. Декабристов 38, 51'}></LinkToMap>
            <LinkToTel theme={'dark'} content={'+7 922 340 81 04'}></LinkToTel>
        </div>
    );
};

export default ContactInfo;