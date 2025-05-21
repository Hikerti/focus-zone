import {useParams} from "react-router-dom";
import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";
import {FindLoading} from "@/components-primary/entites/loading/findLoading.tsx";
import {useUpdateFavourite} from "@/components-primary/entites/cards/hooks/useUpdateFavourite.ts";
import {useState, useEffect} from "react";
import {GetCard} from "@/page/cafeSinglePage/interface/interface.ts";
import LikeButton from "@/components-primary/shared/buttons/likeButton";

const CafeSinglePage = () => {
    const { id } = useParams();
    const { mutate } = useUpdateFavourite();

    const [like, setLike] = useState<boolean | undefined>(false);

    const {data, isPending} = useReadFetcher<GetCard>({
        url: `http://localhost:4000/cafe/get_by_id/${id}`,
        method: "get",
        queryKey: `cafe_card_${id}`,
    })

    useEffect(() => {
        if (data) {
            setLike(data.favourites);
        }
    }, [data]);

    useEffect(() => {
        if (data?.id !== undefined && like !== undefined) {
            mutate({ id: data?.id, favourites: like });
        }
    }, [like])

    FindLoading(isPending)

    return (
        <section className="relative z-50 w-9/10 flex flex-col mt-10">
            <div className='flex gap-8'>
                <img className='h-[400px] w-[300px] object-cover rounded-xl' src={data?.imageUrl} alt="#"/>
                <div className='flex flex-col gap-8'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <h2>{data?.title}</h2>
                            <LikeButton
                                likeProps={like}
                                setLikeProps={setLike}
                            />
                        </div>
                        <h5>{data?.address}</h5>
                        <h5>{data?.createdAt.slice(0, 10)}</h5>
                    </div>
                    <div>
                        <h2>Описание</h2>
                        <p className='text-zinc-900'>{data?.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CafeSinglePage;