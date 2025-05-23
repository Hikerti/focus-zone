import {Carousel, CarouselContent, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";
import {useGetUser} from "@/helpers/store/storeUser.ts";

import {useEffect} from "react";

import {FindLoading} from "@/components-primary/entites/loading/findLoading.tsx";

import {useAchievements} from "@/page/profile/widgets/profileAchievement/store/store.ts";
import {Achievements} from "@/page/profile/widgets/profileAchievement/interface/interface.ts";
import ProfileAchievementContent from "@/page/profile/entites/profileAchievementContent/profileAchievementContent.tsx";

const ProfileAchievement = () => {

    const users = useGetUser(state => state.users);
    const setAchievements = useAchievements(state => state.setAchievements);
    const achievements = useAchievements(state => state.achievements);

    if (!users) return null;

    const {data, isPending} = useReadFetcher<Achievements[]>({
        url: `http://localhost:4000/achievement/get_achievement_user_id/${users[0].id}`,
        method: "get",
        queryKey: `achievement_${users[0].id}`
    })

    FindLoading(isPending)

    useEffect(() => {
        if (data) {
            setAchievements(data)
        }
    })

    return (
       <>
           <div
               className='
                   w-full
                   flex
                   flex-col gap-4
               '
           >
               <h3>
                   Достижения и медали
               </h3>
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

                           sm:w-[400px] sm:h-[500px]
                       '
                   >
                       {
                           achievements.map((achievement, index) => (
                               <ProfileAchievementContent
                                    key={index}
                                    url={achievement.url}
                                    title={achievement.title}
                                    description={achievement.description}
                               />
                           ))
                       }
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
           </div>
       </>
    );
};

export default ProfileAchievement;