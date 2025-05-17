import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {CarouselItem} from "@/components/ui/carousel.tsx";
import {ProfileAchievementContentProps} from '../../interface/inetrface.ts'

const ProfileAchievementContent = ({url, title, description}: ProfileAchievementContentProps) => {
    return (
       <>
           <CarouselItem>
               <Card className='flex w-full h-full '>
                   <CardHeader className='w-full text-center text-[18px] font-bold'>
                       {title}
                   </CardHeader>
                   <CardContent className='w-full h-full'>
                       <img
                           src={url}
                           alt="#"
                           className='object-cover object-center'
                       />
                   </CardContent>
                   <CardFooter className='text-center'>
                       {description}
                   </CardFooter>
               </Card>
           </CarouselItem>
       </>
    );
};

export default ProfileAchievementContent;