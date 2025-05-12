import { MessageService } from './message.service';
import { CreateMessageDto } from "./dto/CreateMessage.dto";
import { UpdateMessageDto } from "./dto/UpdateMessage.dto";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getUserMessage(userId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }[]>;
    getCafeMessage(cafeId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }[]>;
    getIdMessage(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }[]>;
    createMessage(dto: CreateMessageDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }>;
    updateMessage(id: string, dto: UpdateMessageDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }>;
    deleteMessage(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }>;
}
