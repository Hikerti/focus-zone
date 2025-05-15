import CafeListContent from "@/page/cafelist/components/cafeListContent.tsx";
import { FilterCards } from "./components/filterCards";
import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";

const CafeList = () => {
    const filter = useCafeGet((state) => state.filter)

    return (
        <section className="flex w-9/10 flex-col py-10">
            <FilterCards
                filterProps={filter}
            >

            </FilterCards>
            <CafeListContent></CafeListContent>
        </section>
    );
};

export default CafeList;