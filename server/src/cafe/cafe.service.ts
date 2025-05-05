import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';

@Injectable()
export class CafeService {
    constructor (private prisma: PrismaService) {}

    async getCardCafe() {
        return await this.prisma.cardsCafe.findMany()
    }

    async createCardCafe(dto: CreateCartDto) {
        return await this.prisma.cardsCafe.create({
            data: {
                title: dto.title,
                description: dto.description,
                address: dto.address,
                imageUrl: dto.imageUrl
            }
        })
    }

    async updateField(id: number, dto: Partial<UpdateCartDto>) {
        return await this.prisma.cardsCafe.update({
            where: {
                id
            },
            data: dto
        }
        )
    }

    async deleteCardCafe(id: number) {
        return await this.prisma.cardsCafe.delete({
            where: {id}
        }
        )
    }
}
