import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {CarouselItem} from "@/components/ui/carousel.tsx";

import {ProfileAchievementContentProps} from '../../interface/inetrface.ts'

const ProfileAchievementContent = ({url, title, description}: ProfileAchievementContentProps) => {
    return (
       <>
           <CarouselItem>
               <Card
                   className='
                       flex
                       w-full h-full
                       bg-zinc-900
                   '
               >
                   <CardHeader
                       className='
                           w-full
                           text-center text-[18px] text-white
                           font-bold
                       '
                   >
                       {title}
                   </CardHeader>
                   <CardContent
                       className='
                           w-full h-full
                       '
                   >
                       <img
                           src={url}
                           alt="#"
                           className='
                                h-full
                                object-cover object-center
                                rounded-xl
                           '
                       />
                   </CardContent>
                   <CardFooter
                       className='text-center text-white'
                   >
                       {description}
                   </CardFooter>
               </Card>
           </CarouselItem>
       </>
    );
};

export default ProfileAchievementContent;