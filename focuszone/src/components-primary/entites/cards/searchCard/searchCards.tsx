import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Star} from "lucide-react";
import React from "react";

interface SearchCardProps {
    id: number,
    title: string,
    rating: number[],
    imageUrl: string,
}

const SearchCards: React.FC<SearchCardProps> = ({id, rating, title, imageUrl}) => {
    return (
        <Link
            to={`/cafelist/${id}`}
            target='_blank'
            className='w-9/10'
        >
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <div
                                className='flex items-center gap-2 cursor-pointer'
                            >
                                <Avatar className='w-10 h-10'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <div className='text-zinc-900'>{title}</div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Star />
                            <p
                                className="text-zinc-900"
                            >
                                {rating.length !== 0
                                    ?
                                    rating.reduce((sum, item) => sum + item , 0) / rating.length
                                    :
                                    'Нет оценки'
                                }
                            </p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="w-full h-full flex flex-col items-center gap-4">
                    <img className="w-full h-[300px] object-cover rounded-lg" src={imageUrl} alt="img" />
                </CardContent>
            </Card>
        </Link>
    );
};

export default SearchCards;