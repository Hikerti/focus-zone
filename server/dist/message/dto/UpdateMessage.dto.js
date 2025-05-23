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
exports.UpdateMessageDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateMessageDto {
    userId;
    cafeId;
    content;
}
exports.UpdateMessageDto = UpdateMessageDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'userId должен быть строкой' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'cafeId должен быть строкой' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateMessageDto.prototype, "cafeId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'content должен быть строкой' }),
    (0, class_validator_1.MaxLength)(300, { message: 'Длинна content не должен превышать 300 символов' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "content", void 0);
//# sourceMappingURL=UpdateMessage.dto.js.map