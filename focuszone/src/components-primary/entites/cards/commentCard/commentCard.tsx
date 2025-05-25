import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce";
import {useReadFetcher} from "@/helpers/hooks/useReadFetcher";
import {FindLoading} from "@/components-primary/entites/loading/findLoading";
import {UserFullData} from "@/helpers/interface/interface";
import {User} from "lucide-react";

interface CommentCardProps {
    messageData: Message
}

const CommentCard = ({messageData}: CommentCardProps) => {

    const {data: user, isPending} = useReadFetcher<UserFullData>({
        url: `http://localhost:4000/user/get_user_by_id/${messageData?.userId}`,
        method: "get",
        queryKey: `message_${messageData?.content}`
    })

    FindLoading(isPending)

    return (
        <Card
            className='
                h-full
                bg-zinc-900
            '
        >
            <CardContent>
                <CardHeader
                    className='w-full p-0'
                >
                    <div
                        className='
                            flex
                            items-center gap-4
                        '
                    >
                        <User
                            className='
                                text-white
                                w-8 h-8
                            '
                        />
                        <div>
                            <h5
                                className='text-white'
                            >
                                {user?.name}
                            </h5>
                            <h5
                                className='text-white'
                            >
                                {user?.surname}
                            </h5>
                        </div>
                    </div>
                </CardHeader>
                    <div
                        className='
                            w-full h-full
                        '
                    >
                        <p
                            className='
                                text-white
                                h-30
                            '
                        >
                            {messageData.content}
                        </p>
                        <div
                            className='
                                flex
                                items-center justify-center
                                h-full w-full
                                text-white
                            '
                        >
                            Изображения нет
                        </div>
                    </div>
                <CardFooter
                    className='hidden'
                />
            </CardContent>

        </Card>
    );
};

export default CommentCard;