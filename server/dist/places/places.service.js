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
exports.PlacesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PlacesService = class PlacesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPlaces() {
        return await this.prisma.places.findMany();
    }
    async getPlacesById(id) {
        return await this.prisma.places.findUnique({
            where: {
                id
            }
        });
    }
    async createPlaces(dto) {
        return await this.prisma.places.create({
            data: dto
        });
    }
    async updateField(id, dto) {
        return await this.prisma.places.update({
            where: {
                id
            },
            data: dto
        });
    }
    async deletePlaces(id) {
        return await this.prisma.places.delete({
            where: { id }
        });
    }
    async filterPlaces(filter, limit, page) {
        const skip = (page - 1) * limit;
        if (filter == "favorites") {
            return await this.prisma.places.findMany({
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
            return await this.prisma.places.findMany({
                skip: skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc',
                }
            });
        }
        if (filter == "none") {
            return this.getPlacesLimit(limit, page);
        }
    }
    async getPlacesLimit(limit, page) {
        const skip = (page - 1) * limit;
        return await this.prisma.places.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: 'asc'
            }
        });
    }
    async getPlacesLength(dto) {
        try {
            const data = await this.prisma.places.findMany({
                where: {
                    ...dto,
                    rating: dto.rating ? { hasSome: dto.rating } : undefined,
                }
            });
            return data.length;
        }
        catch (error) {
            throw Error(error.message);
        }
    }
};
exports.PlacesService = PlacesService;
exports.PlacesService = PlacesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PlacesService);
//# sourceMappingURL=places.service.js.map