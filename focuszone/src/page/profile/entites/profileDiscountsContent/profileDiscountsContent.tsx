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
                        w-[800px]
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
                                "
                            >
                                <CardHeader
                                    className='
                                        text-[18px] font-bold
                                    '
                                >
                                    {discount.title}
                                </CardHeader>
                                <CardContent>
                                    <div
                                        className="
                                            flex
                                            w-full
                                            justify-between
                                        "
                                    >
                                        <QRCode
                                            style={{ height: "auto", maxWidth: "25%", width: "25%" }}
                                            value={discount.url}
                                            viewBox={`0 0 256 256`}
                                        />
                                        <div
                                            className='w-1/2 flex items-center gap-2'
                                        >
                                            <p
                                                className='text-[18px] text-zinc-900'
                                            >
                                                {discount.description}
                                            </p>
                                            <AvatarComponent
                                                size={"w-[100px] h-[100px]"}
                                                url={discount.url}
                                            >
                                            </AvatarComponent>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious/>
            </Carousel>
        </>
    );
};

export default ProfileDiscountsContent;