import { MessageService } from './message.service';
import { CreateMessageDto } from "./dto/CreateMessage.dto";
import { UpdateMessageDto } from "./dto/UpdateMessage.dto";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getUserMessage(userId: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeMessage(cafeId: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getIdMessage(id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    createMessage(dto: CreateMessageDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMessage(id: string, dto: UpdateMessageDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMessage(id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
