import { FileTypeValidator, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartDto } from './dto/CreateCart.dto';
import { UpdateCartDto } from './dto/UpdateCart.dto';

@Injectable()
export class CafeService {
    constructor (private prisma: PrismaService) {}

    async getCardCafe() {
        return await this.prisma.cardsCafe.findMany()
    }

    async getCardCafeById(id: number) {
        return await this.prisma.cardsCafe.findUnique({
            where: {
                id
            }
        })
    }

    async createCardCafe(dto: CreateCartDto) {
        return await this.prisma.cardsCafe.create({
            data: dto
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

    async filterCards(filter: string, limit: number, page: number) {
        const skip = (page - 1) * limit;

        if (filter == "favorites") {
            return await this.prisma.cardsCafe.findMany({
                skip: skip,
                take: limit,
                where:
                {
                    favourites: true
                },
                orderBy: {
                    id: 'asc'
                }
            })
        } 

        if (filter == "date") {
            return await this.prisma.cardsCafe.findMany({
                skip: skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc',
                }
            })
        }

        if (filter == "none") {
            return this.getCafePage(limit, page)
        }
    }

    async getCafePage(limit: number, page: number) {
        const skip = (page - 1) * limit;

        return await this.prisma.cardsCafe.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: 'asc'
            }
        })
    }

    async getCardCafeLenght() {
        const data = await this.prisma.cardsCafe.findMany()

        return data.length
    }
}
