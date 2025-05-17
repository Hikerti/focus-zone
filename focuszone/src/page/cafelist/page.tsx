import CafeListContent from "@/page/cafelist/widgets/cafeListContent/cafeListContent.tsx";
import { FilterCards } from "@/page/cafelist/widgets/filterCards/filterCards.tsx";
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