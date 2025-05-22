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
exports.CreateDiscountDto = void 0;
const class_validator_1 = require("class-validator");
class CreateDiscountDto {
    userId;
    cafeId;
    url;
    logo;
    title;
    description;
}
exports.CreateDiscountDto = CreateDiscountDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Поле userId должно быть строкой' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsInt)({ message: 'Поле cafeId должно быть числом' }),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "cafeId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: 'Поле url должно быть строкой' }),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: 'Поле logo должно быть строкой' }),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: 'Поле title должно быть строкой' }),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле является обязательным' }),
    (0, class_validator_1.IsString)({ message: 'Поле description должно быть строкой' }),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "description", void 0);
//# sourceMappingURL=CreateDescount.dto.js.map