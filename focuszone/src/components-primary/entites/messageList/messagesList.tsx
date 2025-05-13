import MessageCard from "@/components-primary/entites/cards/messageCard/messageCard.tsx";
import {MessageCardProps} from "@/components-primary/entites/messageList/interface/interface.ts";

const MessagesList = ({messages, rotute}: MessageCardProps) => {
    return (
        <>
            <div
                className={`flex flex-col items-center transition-all ${rotute ? 'h-auto' : 'h-0 hidden'} gap-4 w-full h-full`}
            >
                {messages?.map((item) => (
                    <MessageCard
                        message={item}
                        key={item.id}
                    >
                    </MessageCard>
                ))}
                {messages?.length == 0 && <h3 className='text-zinc-900'>Комментариев нет</h3>}
            </div>

        </>
    );
};

export default MessagesList;