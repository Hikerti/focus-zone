import MessageCard from "@/components-primary/entites/cards/messageCard/messageCard.tsx";
import {MessageCardProps} from "@/components-primary/entites/messageList/interface/interface.ts";
import React from "react";

const MessagesList: React.FC<MessageCardProps> = ({messages, rotute}) => {
    return (
        <>
            <div
                className={`
                ${rotute ? 'h-auto' : 'h-0 hidden'}
                w-full h-full
                flex 
                flex-col items-center gap-4 
                transition-all`}
            >
                {messages?.map((item) => (
                    <MessageCard
                        message={item}
                        key={item.id}
                    >
                    </MessageCard>
                ))}
                {messages?.length == 0 &&
                    <h3
                        className='text-zinc-900'
                    >
                        Комментариев нет
                    </h3>
                }
            </div>

        </>
    );
};

export default MessagesList;