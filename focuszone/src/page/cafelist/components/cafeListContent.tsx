import CardCafe from "@/components-primary/entites/cards/cardCafe/cardCafe.tsx";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";

const CafeListContent = () => {
    const page = useCafeGet(state => state.page);
    const setPage = useCafeGet(state => state.setPage);
    const totalPage = useCafeGet(state => state.totalPage)
    const cards = useCafeGet(state => state.cards)

    return (
        <>
            <div className="flex flex-col justify-center pt-4 items-center w-full gap-4">
                {cards?.map((elem) => {
                    return (
                        <CardCafe 
                            id={elem.id}
                            key={elem.id}
                            style="w-full"
                            title={elem.title}
                            adress={elem.address}
                            imageUrl={elem.imageUrl}
                            description={elem.description}
                            favourites={elem.favourites}
                            createdAt={elem.createdAt}
                            rating={elem.rating}
                            locationLat={elem.locationLat}
                            locationLng={elem.locationLng}
                            showArrow={true}
                        >
                        </CardCafe>
                    )
                })}
                {totalPage > 5 &&
                <Pagination>
                    <PaginationContent>
                        <PaginationItem
                            onClick={() => page > 1 && setPage(page - 1)}
                            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
                        >
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        {
                            Array.from({length: totalPage}, (_, i) => (
                                <PaginationItem key={i + 1} onClick={() => setPage(i + 1)}>
                                    <PaginationLink href="#">
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))
                        }
                        <PaginationItem
                            onClick={() => page < totalPage && setPage(page + 1)}
                            className={page === totalPage ? 'pointer-events-none opacity-50' : ''}
                        >
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                }
            </div>

        </>
    );
};

export default CafeListContent;