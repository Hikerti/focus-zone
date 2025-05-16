import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateDescountDto} from "./dto/CreateDescount.dto";
import {UpdateDescountDto} from "./dto/UpdateDescount.dto";

@Injectable()
export class DiscountsService {
    constructor(private readonly prisma: PrismaService) {}

    async getDiscount() {
        return await this.prisma.discounts.findMany({});
    }

    async getDiscountUserId(userId: string) {
        return await this.prisma.discounts.findMany({
            where: {
                userId
            }
        });
    }

    async getDiscountCafeId(cafeId: number) {
        return await this.prisma.discounts.findMany({
            where: {
                cafeId
            }
        });
    }

    async createDiscounts(dto: CreateDescountDto) {
        return await this.prisma.discounts.create({
            data: dto
        });
    }
    async updateDiscounts(id: number, dto: UpdateDescountDto) {
        if (!id) throw new NotFoundException()

        return await this.prisma.discounts.update({
            where: {
                id
            },
            data: dto

        })
    }

    async deleteDiscount(id: number) {
        if (!id) throw new NotFoundException()

        return await this.prisma.discounts.delete({
            where: {
                id
            }
        })
    }
}
