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
        const fullLimit = (limit * page) + 1
        const FirstLimit = ((page - 1) * limit)

        const whereClause = page === 1
            ? {id: {lt: fullLimit}}
            : {id: {gt: FirstLimit, lt: fullLimit}}

        if (filter == "favorites") {
            return await this.prisma.cardsCafe.findMany({
                where:
                {
                    ...whereClause,
                    favourites: true
                },
                orderBy: {
                    id: 'asc'
                }
            })
        } 

        if (filter == "date") {
            return await this.prisma.cardsCafe.findMany({
                where: whereClause,
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
        const fullLimit = (limit * page) + 1
        const FirstLimit = ((page - 1) * limit)

        const whereClause = page === 1
        ? {id: {lt: fullLimit}}
        : {id: {gt: FirstLimit, lt: fullLimit}}

        return await this.prisma.cardsCafe.findMany({
            where: whereClause,
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
