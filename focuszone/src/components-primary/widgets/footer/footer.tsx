import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";
import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";

const Footer = () => {
    return (
        <footer className='flex items-center justify-center w-[100vw] ms-[-5%] h-[60px] bg-zinc-900'>
            <div className='w-9/10 flex items-center justify-between'>
                <p className='text-white'>company: Focus Zone</p>
                <div className='flex gap-4'>
                    <LinkToEmail
                        content={'admin2@mail.ru'}
                        theme={'light'}
                    >
                    </LinkToEmail>
                    <LinkToTel
                        content={'+7 999 233 99 23'}
                        theme={'light'}
                    >
                    </LinkToTel>
                </div>
            </div>
        </footer>
    );
};

export default Footer;