import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";

const ProfileDiscounts = () => {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <h3>Скидки на покупку</h3>
                <Carousel className="w-full h-full flex flex-col">
                    <CarouselContent className='flex w-[800px] h-[300px]'>
                        <CarouselItem>
                            <Card className='flex w-full h-full'>
                                <CardHeader>Вы прошли путь 5 км</CardHeader>
                                <CardContent>
                                    <img
                                        src="#"
                                        alt="#"
                                        className='w-full h-full object-cover object-center'
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className='flex w-[800px] h-[300px]'>
                            <Card className='flex w-[800px] h-[300px]'>
                                <CardHeader>Вы прошли путь 5 км</CardHeader>
                                <CardContent>
                                    <img
                                        src="#"
                                        alt="#"
                                        className=''
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext></CarouselNext>
                    <CarouselPrevious></CarouselPrevious>
                </Carousel>
            </div>
        </>
    );
};

export default ProfileDiscounts;