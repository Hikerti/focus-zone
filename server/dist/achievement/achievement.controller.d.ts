import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from "./dto/CreateAchievement.dto";
import { UpdateAchievementtDto } from "./dto/UpdateAchievement.dto";
export declare class AchievementController {
    private readonly achievementService;
    constructor(achievementService: AchievementService);
    getAchievement(): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    getAchievementUserId(user_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    getAchievementCafeId(cafe_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }[]>;
    createAchievement(discountDto: CreateAchievementDto): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
    updateAchievement(updateDto: UpdateAchievementtDto, achievement_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
    deleteAchievement(achievement_id: string): Promise<{
        title: string;
        description: string;
        id: number;
        userId: string;
        cafeId: number;
        url: string;
    }>;
}
