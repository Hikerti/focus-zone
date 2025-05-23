import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";

import QRCode from "react-qr-code";

import {Discount} from "@/page/profile/widgets/profileDiscounts/interface/interface.ts";
import {useDiscounts} from "@/page/profile/widgets/profileDiscounts/store/store.ts";

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
                        h-[300px]
                     '
                >
                    {discounts?.map((discount: Discount, index: number) => (
                        <CarouselItem
                            key={discount.id || index}
                        >
                            <Card
                                className="
                                    flex
                                    w-full h-full
                                    bg-zinc-900
                                "
                            >
                                <CardHeader
                                    className='
                                        text-[18px] font-bold text-white
                                    '
                                >
                                    {discount.title}
                                </CardHeader>
                                <CardContent>
                                    <div
                                        className="
                                            flex
                                            w-full
                                            justify-between gap-4
                                        "
                                    >
                                        <div
                                            className='
                                                 flex
                                                 items-center justify-center
                                                 h-[200px] w-[200px]
                                                 bg-white
                                                 p-2
                                            '
                                        >
                                            <QRCode
                                                value={discount.url}
                                                className='w-full h-full'
                                            />
                                        </div>
                                        <div
                                            className='
                                                w-1/2
                                                flex
                                                flex-col items-center gap-4

                                                sm:flex-row
                                            '
                                        >

                                            <AvatarComponent
                                                size={"w-[100px] h-[100px]"}
                                                url={discount.url}
                                            >
                                            </AvatarComponent>
                                            <p
                                                className='text-[18px] text-white'
                                            >
                                                {discount.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
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