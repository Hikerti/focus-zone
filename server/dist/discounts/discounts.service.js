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
exports.DiscountsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DiscountsService = class DiscountsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDiscount() {
        return await this.prisma.discounts.findMany({});
    }
    async getDiscountUserId(userId) {
        return await this.prisma.discounts.findMany({
            where: {
                userId
            }
        });
    }
    async getDiscountCafeId(cafeId) {
        return await this.prisma.discounts.findMany({
            where: {
                cafeId
            }
        });
    }
    async createDiscounts(dto) {
        return await this.prisma.discounts.create({
            data: dto
        });
    }
    async updateDiscounts(id, dto) {
        if (!id)
            throw new common_1.NotFoundException();
        return await this.prisma.discounts.update({
            where: {
                id
            },
            data: dto
        });
    }
    async deleteDiscount(id) {
        if (!id)
            throw new common_1.NotFoundException();
        return await this.prisma.discounts.delete({
            where: {
                id
            }
        });
    }
};
exports.DiscountsService = DiscountsService;
exports.DiscountsService = DiscountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DiscountsService);
//# sourceMappingURL=discounts.service.js.map