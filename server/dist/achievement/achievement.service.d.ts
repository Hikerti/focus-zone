import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class AchievementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAchievement(): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    getAchievementUserId(userId: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    getAchievementCafeId(cafeId: number): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    createAchievement(dto: CreateAchievementDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
    updateAchievement(id: number, dto: UpdateAchievementtDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
    deleteAchievement(id: number): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
}
