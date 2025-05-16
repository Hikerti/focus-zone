import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateAchievementDto} from "./dto/CreateAchievement.dto";
import {UpdateAchievementtDto} from "./dto/UpdateAchievement.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class AchievementService {
    constructor(private readonly prisma: PrismaService) {}

    async getAchievement() {
        return await this.prisma.achievement.findMany({});
    }

    async getAchievementUserId(userId: string) {
        return await this.prisma.achievement.findMany({
            where: {
                userId
            }
        });
    }

    async getAchievementCafeId(cafeId: number) {
        return await this.prisma.achievement.findMany({
            where: {
                cafeId
            }
        });
    }

    async createAchievement(dto: CreateAchievementDto) {
        return await this.prisma.achievement.create({
            data: dto
        });
    }
    async updateAchievement(id: number, dto: UpdateAchievementtDto) {
        if (!id) throw new NotFoundException()

        return await this.prisma.achievement.update({
            where: {
                id
            },
            data: dto

        })
    }

    async deleteAchievement(id: number) {
        if (!id) throw new NotFoundException()

        return await this.prisma.achievement.delete({
            where: {
                id
            }
        })
    }
}
