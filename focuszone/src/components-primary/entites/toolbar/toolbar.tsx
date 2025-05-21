import { Input } from "@/components/ui/input.tsx"

import { Search } from "lucide-react";

import {useEffect, useState} from "react";

import SheetHeaderComponents from "@/components-primary/widgets/sheetHeader/sheetHeader.tsx";
import SearchList from "@/components-primary/widgets/searchList/searchList.tsx";

import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";

import {Card} from "@/page/cafelist/interface/interface.ts";

export default function ToolBar() {
    const [search, setSearch] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const {data: cards} = useReadFetcher<Card[]>({
        url: 'http://localhost:4000/places/get',
        method: "get",
        queryKey: 'places_search_get',
    })

    const setCards = useCafeGet(state => state.setCards);

    useEffect(() => {
        if (cards) {
            setCards(cards)
        }
    }, [cards]);

  return (
    <>
      <div
          className="
          absolute top-0 right-0 z-100
          flex
          w-[100vw]
          p-4
          justify-between items-center
          bg-zinc-900

          lg:w-[94vw]
          xl:w-[96vw]
          sm:w-[92vw]"
      >
          <div
              className="
              relative
              w-4/10
              "
          >
              <Search
                  className="
                  absolute left-2 top-1/2
                  -translate-y-1/2
                  text-white
                  "
                  size={20}
              />
              <Input
                  type="text"
                  placeholder="Поиск"
                  className="pl-10 text-white"
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setSearch(true)}
                  onBlur={() => setSearch(false)}
              />
              {search && <SearchList
                  searchValue={searchValue}
              />}
          </div>
          <SheetHeaderComponents />
      </div>
    </>
  );
}
