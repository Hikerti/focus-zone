import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Card } from "../interface/interface"
import { useReadFetcher } from "@/helpers/hooks/useGetFetcher"
import { FindLoading } from "@/helpers/functions/findLoading"
import { FindError } from "@/helpers/functions/findError"
import { useCafeGet } from "../store/storeCafe"
export const FilterCards = () => {

    const [filter, setFilter] = useState<string>('none')
    const setCards = useCafeGet((state) => state.setCards)

    const { data, isPending, isError } = useReadFetcher<Card[]>({
        url: `http://localhost:4000/cafe/card_filter/${filter}`,
        method: "get",
        queryKey: `cafe_card_${filter}`,
    });

    useEffect(() => {
        FindLoading(isPending)
        FindError(isError)

        if (data) {
            setCards(data)
        }
    }, [data, isPending, isError, setCards])

    

    return (
        <div className="flex w-full">
            <Select onValueChange={(value) => setFilter(value)}>
                <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Выберете фильтр" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="none">Без фильтра</SelectItem>
                        <SelectItem value="favorites">Избранные</SelectItem>
                        <SelectItem value="date">По дате</SelectItem>
                        <SelectItem value="estimation">По оценке</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}