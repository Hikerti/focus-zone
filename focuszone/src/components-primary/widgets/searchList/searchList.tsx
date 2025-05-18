import SearchCards from "@/components-primary/entites/cards/searchCard/searchCards.tsx";
import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";
import {useEffect, useState} from "react";
import {Card} from "@/page/cafelist/interface/interface.ts";

interface SearchCardProps {
    searchValue: string;
}

const SearchList = ({searchValue}: SearchCardProps) => {
    const cards = useCafeGet(state => state.cards)
    const [filterCards, setFilterCards] = useState<Card[]>(cards)

    useEffect(() => {
        if (searchValue) {
            setFilterCards(prev => prev.filter(card => card.title.toLowerCase().includes(searchValue.toLowerCase())))
        } else {
            setFilterCards(cards)
        }
    }, [searchValue])
    return (
        <div
            className='absolute bg-white w-full flex flex-col gap-4 items-center h-100 mt-4 pt-4 overflow-y-scroll rounded-xl'
        >
            {filterCards?.map((elem) => (
                <SearchCards
                    key={elem.id}
                    id={elem.id}
                    rating={elem.rating}
                    title={elem.title}
                    imageUrl={elem.imageUrl}
                />
            ))}
        </div>
    );
};

export default SearchList;