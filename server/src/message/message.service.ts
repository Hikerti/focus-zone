import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateMessageDto} from "./dto/CreateMessage.dto";
import {UpdateMessageDto} from "./dto/UpdateMessage.dto";

@Injectable()
export class MessageService {
    constructor(private readonly prisma: PrismaService ) {}

    async getUserMessage(userId: string) {

        if (!userId) throw new NotFoundException();

        return await this.prisma.message.findMany({
            where: {
                userId,
            },
            orderBy: { createdAt: 'desc' }
        })
    }

    async getCafeMessage(cafeId: number) {

        if (!cafeId) throw new NotFoundException();

        return await this.prisma.message.findMany({
            where: {
                cafeId,
            },
            orderBy: { createdAt: 'desc' }
        })
    }

    async getIdMessage(id: number) {

        if (!id) throw new NotFoundException();

        return await this.prisma.message.findMany({
            where: {
                id,
            },
            orderBy: { createdAt: 'desc' }
        })
    }

    async createMessage(dto: CreateMessageDto) {
        return await this.prisma.message.create({
            data: dto
        })
    }

    async updateMessage(id: number, dto: UpdateMessageDto) {
        if (!id) throw new NotFoundException();

       return await this.prisma.message.update({
           where: {
               id
           },
           data: dto
       })
    }

    async deleteMessage(id: number) {
        if (!id) throw new NotFoundException()

        return await this.prisma.message.delete({
            where: {
                id
            }
        })
    }
}
