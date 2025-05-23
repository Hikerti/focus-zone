import LinkToTel from "@/components-primary/shared/ui/linkToTel.tsx";

import LinkToEmail from "@/components-primary/shared/ui/linkToEmail.tsx";

const Footer = () => {
    return (
        <footer
            className='
                flex
                w-full
                items-center justify-center
                py-2
                bg-zinc-900

                sm:h-[60px]
            '
        >
            <div
                className='
                    flex
                    flex-col
                    w-8/10
                    justify-between gap-2

                    sm:flex-row sm:items-center sm:gap-0
                '
            >
                <p
                    className='text-white'
                >
                    company: Focus Zone
                </p>
                <div
                    className='
                        flex
                        flex-col gap-2

                        sm:flex-row sm:gap-4
                    '
                >
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