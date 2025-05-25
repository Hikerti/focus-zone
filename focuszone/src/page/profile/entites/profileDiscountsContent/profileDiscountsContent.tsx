import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";

import QRCode from "react-qr-code";

import {Discount} from "@/page/profile/widgets/profileDiscounts/interface/interface.ts";
import {useDiscounts} from "@/page/profile/widgets/profileDiscounts/store/store.ts";
import AvatarComponent from "@/components-primary/shared/ui/avatar";

const ProfileDiscountsContent = () => {
    const discounts = useDiscounts(state => state.discounts);

    return (
        <>
            <Carousel
                className="
                    w-full h-full
                    flex
                    flex-col
                "
            >
                <CarouselContent
                    className='
                        flex
                        w-[400px]
                     '
                >
                    {discounts?.map((discount: Discount, index: number) => (
                        <CarouselItem
                            key={discount.id || index}
                        >
                            <Card
                                className='
                                   flex
                                   w-full h-full
                                   bg-zinc-900
                                '
                            >
                                <CardHeader
                                    className='
                                       flex
                                       gap-4
                                       w-full h-[32px]
                                       text-center text-[18px] text-white
                                       font-bold
                                    '
                                >
                                    <AvatarComponent
                                        url={discount.logo}
                                        size={'20px'}
                                    />
                                    <h4>
                                        {discount.title}
                                    </h4>
                                </CardHeader>
                                <CardContent
                                    className='
                                       w-full h-full
                                    '
                                >
                                    <QRCode
                                        value={discount.url}
                                        className='
                                            w-full h-full
                                            p-2
                                            bg-white
                                        '
                                    />
                                </CardContent>
                                <CardFooter
                                    className='
                                        text-center text-white
                                        justify-center
                                    '
                                >
                                    {discount.description}
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext
                    className='
                        hidden

                        sm:flex
                    '
                />
                <CarouselPrevious
                    className='
                        hidden

                        sm:flex
                    '
                />
            </Carousel>
        </>
    );
};

export default ProfileDiscountsContent;