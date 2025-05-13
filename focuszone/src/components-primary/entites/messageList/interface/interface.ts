import {Message} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";

export interface MessageCardProps {
    messages: Message[] | undefined;
    rotute?: boolean;
}