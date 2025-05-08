import CardCafe from "@/components-primary/entites/cards/cardCafe";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { FindError } from "@/helpers/functions/findError";
import { FindLoading } from "@/helpers/functions/findLoading";
import { useReadFetcher } from "@/helpers/hooks/useReadFetcher.ts";
import { Card } from "@/page/cafelist/interface/interface";
export default function CaruselCafe() {

    const {data, isPending, isError} = useReadFetcher<Card[]>({
        url: 'http://localhost:4000/cafe/get',
        method: 'get',
        queryKey: 'cafe_card',
    })

    FindLoading(isPending)
    FindError(isError)

    return (
      <>
        <section className="flex w-full flex-col items-center justify-center px-20 gap-4">
            <div className="flex w-full items-start">
                <h2 className="text-zinc-900">Топ лучших мест</h2>
            </div>
            <Carousel className="w-full">
            <CarouselContent className="w-1/2">
            {
                data?.map(elem => (
                    <CarouselItem key={elem.id}>
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
                            >
                        </CardCafe>
                    </CarouselItem>
                ))
            }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </section>
      </>
    );
  }