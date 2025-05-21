import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class AchievementService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAchievement(): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    getAchievementUserId(userId: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    getAchievementCafeId(cafeId: number): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    createAchievement(dto: CreateAchievementDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
    updateAchievement(id: number, dto: UpdateAchievementtDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
    deleteAchievement(id: number): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
}
