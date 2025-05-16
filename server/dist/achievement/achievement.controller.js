"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementController = void 0;
const common_1 = require("@nestjs/common");
const achievement_service_1 = require("./achievement.service");
const CreateAchievement_dto_1 = require("./dto/CreateAchievement.dto");
const UpdateAchievement_dto_1 = require("./dto/UpdateAchievement.dto");
let AchievementController = class AchievementController {
    achievementService;
    constructor(achievementService) {
        this.achievementService = achievementService;
    }
    getAchievement() {
        return this.achievementService.getAchievement();
    }
    getAchievementUserId(user_id) {
        return this.achievementService.getAchievementUserId(user_id);
    }
    getAchievementCafeId(cafe_id) {
        return this.achievementService.getAchievementCafeId(Number(cafe_id));
    }
    createAchievement(discountDto) {
        return this.achievementService.createAchievement(discountDto);
    }
    updateAchievement(updateDto, achievement_id) {
        return this.achievementService.updateAchievement(Number(achievement_id), updateDto);
    }
    deleteAchievement(achievement_id) {
        return this.achievementService.deleteAchievement(Number(achievement_id));
    }
};
exports.AchievementController = AchievementController;
__decorate([
    (0, common_1.Get)('get_achievement'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "getAchievement", null);
__decorate([
    (0, common_1.Get)('get_achievement_user_id/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "getAchievementUserId", null);
__decorate([
    (0, common_1.Get)('get_achievement_cafe_id/:cafe_id'),
    __param(0, (0, common_1.Param)('cafe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "getAchievementCafeId", null);
__decorate([
    (0, common_1.Post)('create_achievement'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAchievement_dto_1.CreateAchievementDto]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "createAchievement", null);
__decorate([
    (0, common_1.Put)('update_achievement/:achievement_id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('achievement_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateAchievement_dto_1.UpdateAchievementtDto, String]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "updateAchievement", null);
__decorate([
    (0, common_1.Delete)('delete_achievement/:achievement_id'),
    __param(0, (0, common_1.Param)('achievement_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AchievementController.prototype, "deleteAchievement", null);
exports.AchievementController = AchievementController = __decorate([
    (0, common_1.Controller)('achievement'),
    __metadata("design:paramtypes", [achievement_service_1.AchievementService])
], AchievementController);
//# sourceMappingURL=achievement.controller.js.map