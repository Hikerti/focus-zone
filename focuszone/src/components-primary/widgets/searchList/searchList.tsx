import {useEffect, useState} from "react";

import SearchCards from "@/components-primary/entites/cards/searchCard/searchCards.tsx";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";
import {Card} from "@/page/cafelist/interface/interface.ts";
import {SearchCardListProps} from "@/components-primary/widgets/searchList/interface/interface";

const SearchList = ({searchValue}: SearchCardListProps) => {

    const cards = useCafeGet(state => state.cards)
    const [filterCards, setFilterCards] = useState<Card[]>(cards)

    useEffect(() => {
        if (searchValue) {
            setFilterCards(prev =>
                prev.filter(card =>
                    card.title.toLowerCase()
                        .includes(searchValue.toLowerCase()
                        )
                )
            )
        } else {
            setFilterCards(cards)
        }
    }, [searchValue])

    return (
        <div
            className='
                absolute top-[52px]
                flex
                flex-col gap-4 items-center
                w-[80vw] h-100
                bg-white
                py-4
                border-2 border-zinc-200
                overflow-y-scroll rounded-l-xl

                sm:w-full
            '
        >
            {filterCards.length !== 0
                ?
                filterCards?.map((elem) => (
                <SearchCards
                    key={elem.id}
                    id={elem.id}
                    rating={elem.rating}
                    title={elem.title}
                    imageUrl={elem.imageUrl}
                />
            ))
            :
                <h3
                    className='text-zinc-900'
                >
                    Заведение с таким названием не найдено
                </h3>
            }
        </div>
    );
};

export default SearchList;