import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"
import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";
import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";
import {UserFullData} from "@/helpers/interface/interface/interface.ts";

interface MessageCardProps {
    message: Message;
}

const MessageCard = ({message}: MessageCardProps) => {

    const user = useReadFetcher<UserFullData>({
        url: `http://localhost:4000/user/get_user/${message.userId}`,
        method: 'get',
        queryKey: `user_message_${message.userId}`,
    })

    return (
        <>
            <Card className="w-full">
                <CardHeader className='flex items-center'>
                    <AvatarComponent></AvatarComponent>
                    <div>
                        <h5>
                            {user.data?.name + ' ' + user.data?.surname}
                        </h5>
                        <h5>
                            {'@' + user.data?.login}
                        </h5>
                    </div>
                </CardHeader>
                <CardContent>
                    <div>
                        {message.content}
                    </div>
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </>
    );
};

export default MessageCard;