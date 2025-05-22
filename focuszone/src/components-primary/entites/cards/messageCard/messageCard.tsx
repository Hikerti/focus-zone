import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"

import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import {MessageCardProps} from "@/components-primary/entites/cards/interface";

import React from "react";

import {useReadFetcher} from "@/helpers/hooks/useReadFetcher.ts";
import {UserFullData} from "@/helpers/interface/interface.ts";

const MessageCard: React.FC<MessageCardProps> = ({message}) => {

    const user = useReadFetcher<UserFullData>({
        url: `http://localhost:4000/user/get_user_by_id/${message.userId}`,
        method: 'get',
        queryKey: `user_message_${message.userId}`,
    })

    return (
        <>
            <Card
                className="w-full"
            >
                <CardHeader
                    className='
                        flex
                        items-center
                    '
                >
                    <AvatarComponent />
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
                <CardFooter
                    className='hidden'
                />
            </Card>
        </>
    );
};

export default MessageCard;