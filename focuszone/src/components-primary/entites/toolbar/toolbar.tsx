import { Input } from "@/components/ui/input.tsx"

import {Goal, Search} from "lucide-react";

import {useEffect, useState} from "react";

import SheetHeaderComponents from "@/components-primary/widgets/sheetHeader/sheetHeader.tsx";
import SearchList from "@/components-primary/widgets/searchList/searchList.tsx";

import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";

import {Card} from "@/page/cafelist/interface/interface.ts";
import {Link} from "react-router-dom";

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
          absolute top-0 right-0 z-90
          flex
          w-[100vw] h-16
          justify-between items-center
          px-4
          bg-zinc-900
          "
      >
          <div className='
              flex
              items-center gap-4
              w-7/10

              sm:w-full
          '
          >
              <Link to={'/'}>
                  <Goal
                      className='
                        text-white
                        flex

                        sm:hidden
                    '
                  />
              </Link>
              <div
                  className="
                    relative
                    w-full
                    flex

                    sm:ml-[56px] sm:w-7/10
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
                      className="
                        text-white
                        pl-10
                       "
                      onChange={(e) => setSearchValue(e.target.value)}
                      onFocus={() => setSearch(true)}
                      onBlur={() => setSearch(false)}
                  />
                  {search &&
                      <SearchList
                        searchValue={searchValue}
                      />
                  }
              </div>
          </div>
          <SheetHeaderComponents />
      </div>
    </>
  );
}
