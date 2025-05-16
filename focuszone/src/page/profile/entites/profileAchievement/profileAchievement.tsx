import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

const ProfileAchievement = () => {
    return (
       <>
           <div className='w-full flex flex-col gap-4'>
               <h3>Достижения и медали</h3>
               <Carousel className="w-full h-full flex flex-col">
                   <CarouselContent className='flex w-[400px] h-[500px]'>
                       <CarouselItem>
                           <Card className='flex w-full h-full '>
                               <CardHeader className='w-full text-center text-[18px] font-bold'>
                                   Вы прошли путь 5 км
                               </CardHeader>
                               <CardContent className='w-full h-full'>
                                   <img
                                       src="#"
                                       alt="#"
                                       className='object-cover object-center'
                                   />
                               </CardContent>
                               <CardFooter className='text-center'>
                                   Вы прошли путь длинной 5 км. Продолжайте в том же духе
                               </CardFooter>
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

export default ProfileAchievement;