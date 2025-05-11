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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MessageService = class MessageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserMessage(userId) {
        if (!userId)
            throw new common_1.NotFoundException();
        return await this.prisma.message.findMany({
            where: {
                userId,
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async getCafeMessage(cafeId) {
        if (!cafeId)
            throw new common_1.NotFoundException();
        return await this.prisma.message.findMany({
            where: {
                cafeId,
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async getIdMessage(id) {
        if (!id)
            throw new common_1.NotFoundException();
        return await this.prisma.message.findMany({
            where: {
                id,
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    async createMessage(dto) {
        return await this.prisma.message.create({
            data: dto
        });
    }
    async updateMessage(id, dto) {
        if (!id)
            throw new common_1.NotFoundException();
        return await this.prisma.message.update({
            where: {
                id
            },
            data: dto
        });
    }
    async deleteMessage(id) {
        if (!id)
            throw new common_1.NotFoundException();
        return await this.prisma.message.delete({
            where: {
                id
            }
        });
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessageService);
//# sourceMappingURL=message.service.js.map