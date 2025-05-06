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

    useEffect(() => {
        function Loading() {
            const { data, isPending, isError } = useReadFetcher<Card[]>({
                url: 'http://localhost:4000/cafe/get',
                method: "get",
                queryKey: `cafe_card ${filter}`,
            });
        
            FindLoading(isPending)
            FindError(isError)
            if (data) {
                setCards(data)
            }
        }

        Loading()
    })

    

    return (
        <>
            <Select>
                <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder="Выберете фильтр" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="favorites">Избранные</SelectItem>
                        <SelectItem value="data">По дате</SelectItem>
                        <SelectItem value="estimation">По оценке</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

        </>
    )
}