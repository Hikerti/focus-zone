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
exports.DiscountsController = void 0;
const common_1 = require("@nestjs/common");
const discounts_service_1 = require("./discounts.service");
const CreateDescount_dto_1 = require("./dto/CreateDescount.dto");
const UpdateDescount_dto_1 = require("./dto/UpdateDescount.dto");
let DiscountsController = class DiscountsController {
    discountsService;
    constructor(discountsService) {
        this.discountsService = discountsService;
    }
    getDiscount() {
        return this.discountsService.getDiscount();
    }
    getDiscountUserId(user_id) {
        return this.discountsService.getDiscountUserId(user_id);
    }
    getDiscountCafeId(cafe_id) {
        return this.discountsService.getDiscountCafeId(Number(cafe_id));
    }
    createDiscounts(discountDto) {
        return this.discountsService.createDiscounts(discountDto);
    }
    updateDiscounts(updateDto, discount_id) {
        return this.discountsService.updateDiscounts(Number(discount_id), updateDto);
    }
    deleteDiscount(discount_id) {
        return this.discountsService.deleteDiscount(Number(discount_id));
    }
};
exports.DiscountsController = DiscountsController;
__decorate([
    (0, common_1.Get)('get_discount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "getDiscount", null);
__decorate([
    (0, common_1.Get)('get_discount_user_id/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "getDiscountUserId", null);
__decorate([
    (0, common_1.Get)('get_discount_cafe_id/:cafe_id'),
    __param(0, (0, common_1.Param)('cafe_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "getDiscountCafeId", null);
__decorate([
    (0, common_1.Post)('create_discount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDescount_dto_1.CreateDiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "createDiscounts", null);
__decorate([
    (0, common_1.Put)('update_discount/:discount_id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('discount_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateDescount_dto_1.UpdateDescountDto, String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "updateDiscounts", null);
__decorate([
    (0, common_1.Delete)('delete_discount/:discount_id'),
    __param(0, (0, common_1.Param)('discount_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountsController.prototype, "deleteDiscount", null);
exports.DiscountsController = DiscountsController = __decorate([
    (0, common_1.Controller)('discounts'),
    __metadata("design:paramtypes", [discounts_service_1.DiscountsService])
], DiscountsController);
//# sourceMappingURL=discounts.controller.js.map