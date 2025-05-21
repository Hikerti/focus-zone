import {
    AlertDialog,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog.tsx"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

import { toast } from "sonner"
import {ChevronDown, Heart, Star} from "lucide-react";

import MessageDialog from "@/components-primary/entites/dialogs/messageDiaog/messageDialog.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";
import MessagesList from "@/components-primary/entites/messageList/messagesList.tsx";
import MessageButton from "@/components-primary/shared/buttons/messageButton.tsx";
import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";

import {useCafeGet} from "@/page/cafelist/store/storeCafe.ts";
import {useMapData} from "@/page/map/store/store.ts";

import { CardCafeProps } from "../interface.ts";

import { useUpdateFavourite } from "../hooks/useUpdateFavourite.ts";
import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";


import {LatLngLiteral} from "leaflet";

const CardCafe: React.FC<CardCafeProps> = (
    {
        id,
        style,
        title,
        adress,
        imageUrl,
        favourites,
        createdAt,
        rating,
        locationLat,
        locationLng,
        showArrow
    }) => {

    const navigate = useNavigate();

    const [like, setLike] = useState<boolean>(favourites);
    const [message, setMessage] = useState<boolean>(false);
    const [rotate, setRotate] = useState<boolean>(false);

    const setFilter = useCafeGet(state => state.setFilter)
    const setPoints = useMapData(state => state.setPoints)
    const setTitlePlace = useMapData(state => state.setTitlePlaces)

    const { mutate } = useUpdateFavourite();

    useEffect(() => {
        mutate({ id, favourites: like });
    }, [like])

    const messages = useReadFetcher<Message[]>({
        url: `http://localhost:4000/message/get_cafe_messages/${id}`,
        method: "get",
        queryKey: `message ${id}`,
    })

    const ChangeLike = () => {
        if (!like) (
            toast("Like", {
                description: "Вы добавили место в избранные",
                action: {
                    label: "Избранные",
                    onClick: () => {
                        navigate("/cafelist"),
                        setFilter('favorites')
                    }
                },
            })
        )
        setLike(!like)
    }

    return (
        <div
            className={`
                ${style} 
                flex 
                flex-col items-center
            `}
        >
            <Card
                className="w-full"
            >
                <CardHeader>
                    <CardTitle
                        className='
                            flex
                            justify-between items-center
                        '
                    >
                        <div
                            className='
                                flex
                                items-center gap-2
                            '
                        >
                            <Link
                                to={`/cafelist/${id}`}
                                className='
                                    flex
                                    items-center gap-2
                                    cursor-pointer
                                '>
                                <AvatarComponent
                                    url={imageUrl}
                                    size={'text-[12px] w-10 h-10'}
                                >
                                </AvatarComponent>
                            </Link>
                            <div
                                className='
                                    flex
                                    flex-col justify-between
                                '>
                                <Link
                                    to={`/cafelist/${id}`}
                                    target='_blank'
                                    className='text-zinc-900'
                                >
                                    {title}
                                </Link>
                                <LinkToMap
                                    theme={'dark'}
                                    content={adress}
                                />
                                <p
                                    className="text-zinc-900"
                                >
                                    Дата: {createdAt?.slice(2, 10)}
                                </p>
                            </div>
                        </div>
                        <div
                            className='
                                flex
                                flex-col items-center
                            '>
                            <Star />
                            <p
                                className="text-zinc-900"
                            >
                                {rating.length !== 0
                                    ?
                                    (rating.reduce((sum, item) => sum + item , 0) / rating.length).toFixed(2)
                                    :
                                    'Нет оценки'
                                }
                            </p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent
                    className="
                    w-full h-full
                    flex
                    flex-col items-center gap-4
                    "
                >
                    <div
                        className='
                            w-[94%] h-[600px]
                            flex
                            items-center justify-center
                        '
                    >
                        <Carousel
                            className='
                                w-full h-full
                                flex
                                flex-col'
                        >
                            <CarouselContent
                                className="w-full h-[600px]"
                            >
                                <CarouselItem>
                                    <Link
                                        to={`/cafelist/${id}`}
                                        target='_blank'
                                    >
                                        <img
                                            className="
                                                w-full h-full
                                                object-cover rounded-lg
                                            "
                                            src={imageUrl}
                                            alt="img"
                                        />
                                    </Link>
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        className="
                                            w-full h-full
                                            object-cover rounded-lg
                                        "
                                        src={imageUrl}
                                        alt="img"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        className="
                                            w-full h-full
                                            object-cover rounded-lg
                                        "
                                        src={imageUrl}
                                        alt="img" />
                                </CarouselItem>
                            </CarouselContent>
                            {
                                showArrow &&
                                <>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </>
                            }
                        </Carousel>
                    </div>
                    <div
                        className='
                        w-full
                        flex
                        gap-2 justify-between items-center
                        '
                    >
                        <div
                            className='
                            flex
                            gap-2
                            '
                        >
                            <Button
                                className='cursor-pointer'
                                onClick={() =>
                                    toast("Success", {
                                        description: 'Кликните, что-бы увидеть точку на карте',
                                        action: {
                                            label: "Карта",
                                            onClick: () => {
                                                navigate("/map")
                                                const newPoint: LatLngLiteral = {
                                                    lat: Number(locationLat),
                                                    lng: Number(locationLng),
                                                };
                                                setTitlePlace(title)
                                                setPoints(newPoint)
                                            },
                                        },
                                    })
                                }
                            >
                                Поставить метку
                            </Button>
                            <Button
                                size='icon'
                                className={`
                                    ${like ? "border-red-500" : "border-zinc-900"}
                                    bg-transparent border-2 
                                    hover:bg-white 
                                    cursor-pointer 
                                    group
                                `}
                                onClick={() => ChangeLike()}
                            >
                                <Heart
                                    className={`
                                    ${like ? "text-red-500" : "text-zinc-900"} 
                                    bg-white
                                    transition 
                                    `}
                                />
                            </Button>
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <MessageButton
                                        onClick={() => setMessage(!message)}
                                    >

                                    </MessageButton>
                                </AlertDialogTrigger>
                                <MessageDialog
                                    cafeId={id}
                                    ratingNow={rating}
                                >
                                </MessageDialog>
                            </AlertDialog>
                        </div>
                        <ChevronDown
                            onClick={() => setRotate(!rotate)}
                            className={`
                                ${rotate ? 'rotate-0' : 'rotate-180'}
                                cursor-pointer 
                                transition-transform 
                            `}
                        />
                    </div>
                    <MessagesList
                        messages={messages?.data}
                        rotute={rotate}
                    >
                    </MessagesList>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardCafe;