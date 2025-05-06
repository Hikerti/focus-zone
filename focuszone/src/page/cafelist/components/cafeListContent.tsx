import CardCafe from "@/components-primary/entites/cards/cardCafe.tsx";
import { FindError } from "@/helpers/functions/findError";
import { FindLoading } from "@/helpers/functions/findLoading";
import { Card } from "../interface/interface";
import { useReadFetcher } from "@/helpers/hooks/useGetFetcher";


const CafeListContent = () => {

    const {data, isPending, isError} = useReadFetcher<Card[]>({
        url: 'http://localhost:4000/cafe/get',
        method: 'get',
        queryKey: 'cafe_card',
    })

    FindLoading(isPending)
    FindError(isError)

    return (
        <>
            <section className="flex flex-col justify-center pt-4 items-center w-full gap-4">
                {data?.map((elem) => {
                    return (
                        <CardCafe 
                            id={elem.id}
                            key={elem.id}
                            style="w-8/10"
                            title={elem.title}
                            adress={elem.address}
                            imageUrl={elem.imageUrl}
                            description={elem.description}
                            favourites={elem.favourites}
                            createdAt={elem.createdAt}
                        >
                        </CardCafe>
                    )
                })}
                
            </section>
        </>
    );
};

export default CafeListContent;