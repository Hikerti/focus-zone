import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class AchievementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAchievement(): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    getAchievementUserId(userId: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    getAchievementCafeId(cafeId: number): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    createAchievement(dto: CreateAchievementDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
    updateAchievement(id: number, dto: UpdateAchievementtDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
    deleteAchievement(id: number): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
}
