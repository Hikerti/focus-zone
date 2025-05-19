import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
export declare class AchievementController {
    private readonly achievementService;
    constructor(achievementService: AchievementService);
    getAchievement(): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    getAchievementUserId(user_id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    getAchievementCafeId(cafe_id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }[]>;
    createAchievement(discountDto: CreateAchievementDto): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
    updateAchievement(updateDto: UpdateAchievementtDto, achievement_id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
    deleteAchievement(achievement_id: string): Promise<{
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
        description: string;
    }>;
}
