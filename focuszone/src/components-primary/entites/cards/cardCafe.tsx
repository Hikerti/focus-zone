import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import LinkToMap from "@/components-primary/shared/ui/linkToMap.tsx";
import {Button} from "@/components/ui/button.tsx";
import { toast } from "sonner"
import {Heart} from "lucide-react";
import {useEffect, useState} from "react";
import { CardCafeProps } from "./interface";
import { useUpdateFavourite } from "./hooks/useUpdateFavourite";

const CardCafe = ({id, style, title, adress, imageUrl, description, favourites, createdAt}: CardCafeProps) => {
    const navigate = useNavigate();
    const [like, setLike] = useState<boolean>(favourites);

    const { mutate } = useUpdateFavourite();

    useEffect(() => {
        mutate({ id: id.toString(), favourites: like });
    }, [like])

    const ChangeLike = () => {
        if (!like) (
            toast("Like", {
                description: "Вы добавили место в избранные",
                action: {
                    label: "Избранные",
                    onClick: () => navigate("/map"),
                },
            })
        )
        setLike(!like)
    }

    return (
        <div className={`${style} flex flex-col items-center`}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <Link to={`/cafelist/${id}`} className='flex items-center gap-2 cursor-pointer'>
                            <Avatar className='w-10 h-10'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </Link>
                        <div className='flex flex-col justify-between'>
                            <Link to={`/cafelist/${id}`} className='text-zinc-900'>{title}</Link>
                            <LinkToMap theme={'dark'} content={adress}></LinkToMap>
                            <p className="text-zinc-900">Дата: {createdAt?.slice(2, 10)}</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col gap-4">
                    <Link to={`/cafelist/${id}`} className='w-full h-[600px] flex items-center justify-center rounded-lg'>
                        <img className="w-full h-full rounded-xl" src={imageUrl} alt="img" />
                    </Link>
                    <div className='flex gap-2'>
                        <Button
                            className='cursor-pointer'
                            onClick={() =>
                                toast("Success", {
                                    description: `${description}`,
                                    action: {
                                        label: "Карта",
                                        onClick: () => navigate("/map"),
                                    },
                                })
                            }
                        >
                            Поставить метку
                        </Button>
                        <Button
                            size='icon'
                            className={`${like ? "border-red-500" : "border-zinc-900"} bg-transparent border-2 hover:bg-white cursor-pointer  group`}
                            onClick={() => ChangeLike()}
                        >
                            <Heart
                                className={`${like ? "text-red-500" : "text-zinc-900"} transition bg-white`}
                            />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardCafe;