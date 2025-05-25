import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {useReadFetcher} from "@/helpers/hooks/useReadFetcher";
import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce";
import {FindLoading} from "@/components-primary/entites/loading/findLoading";
import CommentCard from "@/components-primary/entites/cards/commentCard/commentCard";

interface CommentsCaruselProps {
    cafeId: number
}

const CommentsCarusel = ({cafeId}: CommentsCaruselProps) => {

    const {isPending, data: message} = useReadFetcher<Message[]>({
        url: `http://localhost:4000/message/get_cafe_messages/${cafeId}`,
        method: 'get',
        queryKey: `message_cafeId_${cafeId}`,
    })

    FindLoading(isPending)

    return (
        <section
            className={`
                ${message?.length == 0 ? "h-[500px]" : "h-full"}
                relative z-20
                flex
                w-full
                px-[10px] my-10
                flex-col items-center gap-4

                md:w-full sm:px-0
            `}
        >
            <div
                className="
                    flex
                    w-full
                    items-start
                "
            >
                <h2
                    className="text-zinc-900"
                >
                    Комментарии
                </h2>
            </div>
            {
                message && message?.length > 0
                ?
                    <Carousel
                        className="w-full"
                    >
                        <CarouselContent
                            className="
                                w-full
                                h-[500px]
                                sm:w-[500px]
                            "
                        >
                            {
                                message?.map(elem => (
                                    <CarouselItem
                                        key={elem.id}
                                        className='
                                            h-[500px]
                                        '
                                    >
                                        <CommentCard
                                            messageData={elem}
                                        />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious
                            className='
                                hidden
                                sm:flex
                            '
                        />
                        <CarouselNext
                            className='
                                hidden
                                sm:flex
                            '
                        />
                    </Carousel>
                :
                    <h4
                        className='
                            flex
                            items-center justify-center
                            h-full
                        '
                    >
                        Комментариев нет
                    </h4>
            }

        </section>
    );
};

export default CommentsCarusel;