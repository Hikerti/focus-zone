import CafeListContent from "@/page/cafelist/widgets/cafeListContent/cafeListContent.tsx";
import { FilterCards } from "@/page/cafelist/widgets/filterCards/filterCards.tsx";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";

const CafeList = () => {
    const filter = useCafeGet((state) => state.filter)

    return (
        <section
            className="
                relative z-50
                flex
                w-8/10
                flex-col
                my-4
            "
        >
            <FilterCards
                filterProps={filter}
            >
            </FilterCards>
            <CafeListContent/>
        </section>
    );
};

export default CafeList;