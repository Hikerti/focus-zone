import CardCafe from "@/components-primary/entites/cards/cardCafe/cardCafe.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel.tsx"

import { FindLoading } from "@/components-primary/entites/loading/findLoading.tsx";

import { useReadFetcher } from "@/helpers/hooks/useReadFetcher.ts";

import { Card } from "@/page/cafelist/interface/interface.ts";

export default function CarouselCafe() {

    const {data, isPending} = useReadFetcher<Card[]>({
        url: 'http://localhost:4000/places/places_filter/none/1/6',
        method: 'get',
        queryKey: 'cafe_card',
    })

    FindLoading(isPending)

    return (
      <>
        <section
            className="
                relative z-20
                flex
                w-full
                px-[10px] my-10
                flex-col items-center justify-center gap-4

                md:w-8/10 sm:px-0
            "
        >
            <div
                className="
                    flex
                    w-full
                    items-start
                "
            >
                <h2
                    className="text-zinc-900"
                >
                    Топ лучших мест
                </h2>
            </div>
            <Carousel
                className="w-full"
            >
            <CarouselContent
                className="
                    w-full
                    sm:w-[600px]
                "
            >
            {
                data?.map(elem => (
                    <CarouselItem
                        key={elem.id}
                    >
                        <CardCafe
                            id={elem.id}
                            key={elem.id}
                            style="w-full"
                            title={elem.title}
                            adress={elem.address}
                            imageUrl={elem.imageUrl}
                            description={elem.description}
                            favourites={elem.favourites}
                            createdAt={elem.createdAt}
                            rating={elem.rating}
                            locationLat={elem.locationLat}
                            locationLng={elem.locationLng}
                            showArrow={false}
                            />
                    </CarouselItem>
                ))
            }
            </CarouselContent>
            <CarouselPrevious
                className='
                    hidden
                    sm:flex
                '
            />
            <CarouselNext
                className='
                    hidden
                    sm:flex
                '
            />
            </Carousel>
        </section>
      </>
    );
  }