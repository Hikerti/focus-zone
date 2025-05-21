import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { AchievementService } from './achievement.service';
import {CreateAchievementDto} from "./dto/CreateAchievement.dto";
import {UpdateAchievementtDto} from "./dto/UpdateAchievement.dto";

@Controller('achievement')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

    @Get('get_achievement')
    getAchievement() {
        return this.achievementService.getAchievement();
    }
    @Get('get_achievement_user_id/:user_id')
    getAchievementUserId(@Param('user_id') user_id: string) {
        return this.achievementService.getAchievementUserId(user_id);
    }
    @Get('get_achievement_cafe_id/:cafe_id')
    getAchievementCafeId(@Param('cafe_id') cafe_id: string) {
        return this.achievementService.getAchievementCafeId(Number(cafe_id));
    }
    @Post('create_achievement')
    createAchievement(@Body() discountDto: CreateAchievementDto) {
        return this.achievementService.createAchievement(discountDto);
    }
    @Put('update_achievement/:achievement_id')
    updateAchievement(@Body() updateDto: UpdateAchievementtDto, @Param('achievement_id') achievement_id: string) {
        return this.achievementService.updateAchievement(Number(achievement_id), updateDto)
    }
    @Delete('delete_achievement/:achievement_id')
    deleteAchievement(@Param('achievement_id') achievement_id: string) {
        return this.achievementService.deleteAchievement(Number(achievement_id));
    }
}
