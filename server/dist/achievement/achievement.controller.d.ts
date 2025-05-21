import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
export declare class AchievementController {
    private readonly achievementService;
    constructor(achievementService: AchievementService);
    getAchievement(): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    getAchievementUserId(user_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    getAchievementCafeId(cafe_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }[]>;
    createAchievement(discountDto: CreateAchievementDto): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
    updateAchievement(updateDto: UpdateAchievementtDto, achievement_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
    deleteAchievement(achievement_id: string): Promise<{
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
        title: string;
    }>;
}
