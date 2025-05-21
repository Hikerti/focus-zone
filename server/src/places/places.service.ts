import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlacesDto } from './dto/CreatePlaces.dto';
import { UpdatePlacesDto } from './dto/UpdatePlaces.dto';

@Injectable()
export class PlacesService {
    constructor (private prisma: PrismaService) {}

    async getPlaces() {
        return await this.prisma.places.findMany()
    }

    async getPlacesById(id: number) {
        return await this.prisma.places.findUnique({
            where: {
                id
            }
        })
    }

    async createPlaces(dto: CreatePlacesDto) {
        return await this.prisma.places.create({
            data: dto
        })
    }

    async updateField(id: number, dto: Partial<UpdatePlacesDto>) {
        return await this.prisma.places.update({
                where: {
                    id
                },
                data: dto
            }
        )
    }

    async deletePlaces(id: number) {
        return await this.prisma.places.delete({
                where: {id}
            }
        )
    }

    async filterPlaces(filter: string, limit: number, page: number) {
        const skip = (page - 1) * limit;

        if (filter == "favorites") {
            return await this.prisma.places.findMany({
                skip: skip,
                take: limit,
                where:
                    {
                        favourites: true
                    },
                orderBy: {
                    id: 'asc'
                }
            })
        }

        if (filter == "date") {
            return await this.prisma.places.findMany({
                skip: skip,
                take: limit,
                orderBy: {
                    createdAt: 'desc',
                }
            })
        }

        if (filter == "none") {
            return this.getPlacesLimit(limit, page)
        }
    }

    async getPlacesLimit(limit: number, page: number) {
        const skip = (page - 1) * limit;

        return await this.prisma.places.findMany({
            skip: skip,
            take: limit,
            orderBy: {
                id: 'asc'
            }
        })
    }

    async getPlacesLength(dto: UpdatePlacesDto) {
        try {
            const data = await this.prisma.places.findMany({
                where: {
                    ...dto,
                    rating: dto.rating ? { hasSome: dto.rating } : undefined,
                }
            });
            return data.length;
        } catch (error) {
            throw Error(error.message)
        }
    }
}
