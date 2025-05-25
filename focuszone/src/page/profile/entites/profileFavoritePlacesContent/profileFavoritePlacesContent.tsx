import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {
    ProfileFavoritePlacesContentProps
} from "@/page/profile/entites/profileFavoritePlacesContent/interface/interface";
import {FullDataPlace} from "@/helpers/interface/interface";
import CardCafe from "@/components-primary/entites/cards/cardCafe/cardCafe";

const ProfileFavoritePlacesContent = ({favoritePlaces}: ProfileFavoritePlacesContentProps) => {

    return (
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
                     '
            >
                {favoritePlaces?.map((favoritePlace: FullDataPlace, index: number) => (
                    <CarouselItem
                        key={favoritePlace.id || index}
                    >
                        <CardCafe
                            id={favoritePlace.id}
                            theme='dark'
                            title={favoritePlace.title}
                            adress={favoritePlace.address}
                            imageUrl={favoritePlace.imageUrl}
                            favourites={favoritePlace.favourites}
                            createdAt={favoritePlace.createdAt}
                            rating={favoritePlace.rating}
                            locationLat={favoritePlace.locationLat}
                            locationLng={favoritePlace.locationLng}
                        />
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
    );
};

export default ProfileFavoritePlacesContent;