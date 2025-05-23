import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select.tsx"

import { useEffect, useState } from "react"

import {Card} from "../../interface/interface.ts"

import { useReadFetcher } from "@/helpers/hooks/useReadFetcher.ts"

import { FindLoading } from "@/components-primary/entites/loading/findLoading.tsx"

import { useCafeGet } from "../../store/storeCafe.ts"

type FilterProps = {
    filterProps: 'none' | "favorites" | "date" | "estimation"
}

export const FilterCards = ({filterProps} : {filterProps: FilterProps | string}) => {

    const [filter, setFilter] = useState<FilterProps | string>(filterProps)

    const setCards = useCafeGet((state) => state.setCards)
    const calcPaginationPage = useCafeGet((state) => state.calcPaginationPage)
    const limit = useCafeGet(state => state.limit)
    const page = useCafeGet(state => state.page)

    const { data, isPending, isError } = useReadFetcher<Card[]>({
        url: `http://localhost:4000/places/places_filter/${filter}/${page}/${limit}`,
        method: "get",
        queryKey: `places_card_${filter}_${page}_${limit}`,
    });

    useEffect(() => {
        FindLoading(isPending)

        if (data) {
            setCards(data)
            if (filter == 'none' || filter == 'date') {
                calcPaginationPage({})
            }
            if (filter == 'favorites') {
                calcPaginationPage({favourites: true})
            }
        }
    }, [data, isPending, isError, setCards, filter])

    return (
        <div
            className="
                flex
                w-full
            "
        >
            <Select
                onValueChange={(value) => setFilter(value)}
            >
                <SelectTrigger
                    className="w-[300px]"
                >
                    <SelectValue placeholder="Выберете фильтр" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="none">
                            Без фильтра
                        </SelectItem>
                        <SelectItem value="favorites">
                            Избранные
                        </SelectItem>
                        <SelectItem value="date">
                            По дате
                        </SelectItem>
                        <SelectItem value="estimation">
                            По оценке
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}