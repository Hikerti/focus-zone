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
exports.CafeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CafeService = class CafeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCardCafe() {
        return await this.prisma.cardsCafe.findMany();
    }
    async getCardCafeById(id) {
        return await this.prisma.cardsCafe.findUnique({
            where: {
                id
            }
        });
    }
    async createCardCafe(dto) {
        return await this.prisma.cardsCafe.create({
            data: dto
        });
    }
    async updateField(id, dto) {
        return await this.prisma.cardsCafe.update({
            where: {
                id
            },
            data: dto
        });
    }
    async deleteCardCafe(id) {
        return await this.prisma.cardsCafe.delete({
            where: { id }
        });
    }
    async filterCards(filter, limit, page) {
        const skip = (page - 1) * limit;
        if (filter == "favorites") {
            return await this.prisma.cardsCafe.findMany({
                skip: skip,
                take: limit,
                where: {
                    favourites: true
                },
                orderBy: {
                    id: 'asc'
                }
            });
        }
        if (filter == "date") {
            return await this.prisma.cardsCafe.findMany({
                skip: skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc',
                }
            });
        }
        if (filter == "none") {
            return this.getCafePage(limit, page);
        }
    }
    async getCafePage(limit, page) {
        const skip = (page - 1) * limit;
        return await this.prisma.cardsCafe.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: 'asc'
            }
        });
    }
    async getCardCafeLenght() {
        const data = await this.prisma.cardsCafe.findMany();
        return data.length;
    }
};
exports.CafeService = CafeService;
exports.CafeService = CafeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CafeService);
//# sourceMappingURL=cafe.service.js.map