import { PrismaService } from "../prisma/prisma.service";
import { CreateMessageDto } from "./dto/CreateMessage.dto";
import { UpdateMessageDto } from "./dto/UpdateMessage.dto";
export declare class MessageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserMessage(userId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }[]>;
    getCafeMessage(cafeId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }[]>;
    getIdMessage(id: number): Promise<{
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
    updateMessage(id: number, dto: UpdateMessageDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }>;
    deleteMessage(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        cafeId: number;
        content: string;
    }>;
}
