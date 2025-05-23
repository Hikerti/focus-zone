import {Button} from "@/components/ui/button";

const BurgerButton = () => {
    return (
        <Button
            className='
                flex
                w-full h-full
                flex-col items-center justify-center gap-1
                p-0 m-0
                cursor-pointer
            '
        >
            <span
                className='
                    h-[2px] w-full
                     bg-white
                    rounded-full
                '
            />
            <span
                className='
                    h-[2px] w-full
                    bg-white
                    rounded-full
                '
            />
            <span
                className='
                    h-[2px] w-full
                    bg-white
                    rounded-full
                '
            />
        </Button>
    );
}

export default BurgerButton;