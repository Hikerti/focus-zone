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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAchievementtDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateAchievementtDto {
    userId;
    cafeId;
    url;
    title;
    description;
}
exports.UpdateAchievementtDto = UpdateAchievementtDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Поле userId должно быть строкой' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAchievementtDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'Поле cafeId должно быть числом' }),
    __metadata("design:type", Number)
], UpdateAchievementtDto.prototype, "cafeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Поле url должно быть строкой' }),
    __metadata("design:type", String)
], UpdateAchievementtDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Поле title должно быть строкой' }),
    __metadata("design:type", String)
], UpdateAchievementtDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Поле description должно быть строкой' }),
    __metadata("design:type", String)
], UpdateAchievementtDto.prototype, "description", void 0);
//# sourceMappingURL=UpdateAchievement.dto.js.map