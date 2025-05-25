import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useEffect, useState} from "react";
import {
    FavoritePlace,
    ResolveDataFavoritePlace
} from "@/page/profile/widgets/profileFavoritePlaces/interface/interface";

import ProfileFavoritePlacesContent from "@/page/profile/entites/profileFavoritePlacesContent/profileFavoritePlacesContent";

const ProfileFavoritePlaces = () => {

    const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlace[]>([])

    const {mutate} = useMutation({
        mutationFn: async () => {
            try {
                const places: ResolveDataFavoritePlace = await axios.get(`http://localhost:4000/places/places_filter/favorites/1/5`)
                setFavoritePlaces([...places.data])
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
            <div
                className={`
                    w-full 
                    flex
                    flex-col gap-4
                    
                    ${favoritePlaces.length == 0 ? 'h-[500px]' : 'h-full'}
                `}
            >
                <h3>
                    Лучшие места
                </h3>
                {
                    favoritePlaces.length > 0
                        ?
                        <>
                            <ProfileFavoritePlacesContent
                                favoritePlaces={favoritePlaces}
                            />
                        </>
                        :
                        <>
                            <h4 className='
                                flex
                                justify-center items-center
                                h-full
                               text-zinc-900
                            '>
                                У вас пока нет избранных мест
                            </h4>
                        </>
                }
            </div>
        </>
    );
};

export default ProfileFavoritePlaces;