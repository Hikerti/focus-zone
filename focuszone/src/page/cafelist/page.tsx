import CafeListContent from "@/page/cafelist/components/cafeListContent.tsx";
import { FilterCards } from "./components/filterCards";

const CafeList = () => {
    return (
        <section className="flex w-9/10 flex-col mt-10">
            <FilterCards></FilterCards>
            <CafeListContent></CafeListContent>
        </section>
    );
};

export default CafeList;