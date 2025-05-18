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
exports.UpdateCartDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateCartDto {
    title;
    description;
    address;
    imageUrl;
    favourites;
    rating;
    locationLat;
    locationLng;
}
exports.UpdateCartDto = UpdateCartDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле title должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле description должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле address должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле imageUrl должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: "Поле favourites должно быть boolean" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateCartDto.prototype, "favourites", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateCartDto.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле locationLat должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "locationLat", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Поле locationLng должно быть строкой" }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "locationLng", void 0);
//# sourceMappingURL=UpdateCart.dto.js.map