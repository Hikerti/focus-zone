import CardCafe from "@/components-primary/entites/cards/cardCafe.tsx";
import { useCafeGet } from "../store/storeCafe";
const CafeListContent = () => {

    const cards = useCafeGet((state) => state.cards)

    return (
        <>
            <section className="flex flex-col justify-center pt-4 items-center w-full gap-4">
                {cards?.map((elem) => {
                    return (
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
                    )
                })}
                
            </section>
        </>
    );
};

export default CafeListContent;