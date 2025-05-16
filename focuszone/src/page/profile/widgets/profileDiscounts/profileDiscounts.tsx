import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser.ts";
import {useDiscounts} from "@/page/profile/widgets/profileDiscounts/store/store.ts";
import {DiscountsData} from "@/page/profile/widgets/profileDiscounts/interface/interface.ts";
import { useEffect } from "react";
import ProfileDiscountsContent from "@/page/profile/entites/profileDiscountsContent/profileDiscountsContent.tsx";

const ProfileDiscounts = () => {

    const users = useGetUser(state => state.users);
    const setDiscounts = useDiscounts(state => state.setDiscounts);
    const discounts = useDiscounts(state => state.discounts);

    const {mutate} = useMutation({
        mutationFn: async () => {
            try {
                if (users) {
                    const descounts: DiscountsData = await axios.get(`http://localhost:4000/discounts/get_discount_user_id/${users[0].id}`)
                    setDiscounts(descounts.data)
                }
            } catch (error) {
                throw error;
            }
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    return (
        <>
            <div className='w-full flex flex-col gap-4'>
                <h3>Скидки на покупку</h3>
                {
                    discounts
                        ?
                        <>
                            <ProfileDiscountsContent/>
                        </>
                        :
                        <>
                         <p>У вас пока нет скидочных купонов</p>
                     </>
                }
            </div>
        </>
    );
};

export default ProfileDiscounts;