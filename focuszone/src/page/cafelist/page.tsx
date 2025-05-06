import CafeListContent from "@/page/cafelist/components/cafeListContent.tsx";
import { FilterCards } from "./components/filterCards";

const CafeList = () => {
    return (
        <section className="flex flex-col mt-4">
            <FilterCards></FilterCards>
            <CafeListContent></CafeListContent>
        </section>
    );
};

export default CafeList;