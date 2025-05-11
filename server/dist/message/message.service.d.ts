import { PrismaService } from "../prisma/prisma.service";
import { CreateMessageDto } from "./dto/CreateMessage.dto";
import { UpdateMessageDto } from "./dto/UpdateMessage.dto";
export declare class MessageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserMessage(userId: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getCafeMessage(cafeId: number): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getIdMessage(id: number): Promise<{
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
    updateMessage(id: number, dto: UpdateMessageDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteMessage(id: number): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
