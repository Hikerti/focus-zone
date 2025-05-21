import {PrismaService} from "../prisma/prisma.service";
import {Test, TestingModule} from "@nestjs/testing";
import {PlacesService} from "./places.service";
import {CreatePlacesDto} from "src/places/dto/CreatePlaces.dto";
import {UpdatePlacesDto} from "src/places/dto/UpdatePlaces.dto";

describe('Places Serves test', () => {
    let service: PlacesService;
    let prisma: PrismaService;

    const mockPrismaService = {
        places: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    const place = {
        id: 1,
        title: "Вкусные суши",
        description: "Ходдоги для всех",
        address: "Дома пушкина",
        imageUrl: "http://",
        rating: [
            3,
            1,
            5,
            3,
            3
        ],
        favourites: true,
        locationLat: "54.34535",
        locationLng: "34.3243432",
        createdAt: "2025-05-19T04:15:25.563Z",
        updatedAt: "2025-05-21T13:57:06.310Z"
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PlacesService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<PlacesService>(PlacesService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should all places', async () => {
        const places = [place]

        mockPrismaService.places.findMany.mockResolvedValue(places)

        const result = await service.getPlaces()
        expect(result).toEqual(places)
        expect(prisma.places.findMany).toHaveBeenCalledWith();
    })

    it('should place by id', async () => {

        mockPrismaService.places.findUnique.mockResolvedValue(place)
        const result = await service.getPlacesById(1)
        expect(result).toEqual(place);
        expect(prisma.places.findUnique).toHaveBeenCalledWith({
          where: { id: 1 },
        });
    })

    it('create place', async () => {
        const dto: CreatePlacesDto = {
            title: "Вкусные суши",
            description: "Хотдоги для всех",
            address: "Дома пушкина",
            imageUrl: "http://",
            rating: [
                3,
                1,
                5,
                3,
                3
            ],
            favourites: true,
            locationLat: "54.34535",
            locationLng: "34.3243432"
        }

        mockPrismaService.places.create.mockResolvedValue({
            id: 1,
            ...dto,
            createdAt: "2025-05-19T04:15:25.563Z",
            updatedAt: "2025-05-21T13:57:06.310Z",
        })

        const result = await service.createPlaces(dto)
        expect(result).toEqual({
            id: 1,
            ...dto,
            createdAt: "2025-05-19T04:15:25.563Z",
            updatedAt: "2025-05-21T13:57:06.310Z",
        })
        expect(prisma.places.create).toHaveBeenCalledWith({
            data: dto
        })
    })

    it('updateField for place', async () => {
        const dto: UpdatePlacesDto = {
            favourites: true
        }

        mockPrismaService.places.update.mockResolvedValue({id: 1, ...dto})

        let result = await service.updateField(1, dto)

        expect(result).toEqual({id: 1, ...dto})
        expect(prisma.places.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: dto
        })
    })

    it('delete places', async () => {
        mockPrismaService.places.delete.mockResolvedValue(place)

        let result = await service.deletePlaces(1)
        expect(result).toEqual(place)
        expect(prisma.places.delete).toHaveBeenCalledWith({
            where: { id: 1 },
        })
    })

    it('filter favorites place', async () => {
        mockPrismaService.places.findMany.mockResolvedValue([place])

        let result = await service.filterPlaces("favorites", 1, 1)
        expect(result).toEqual([place])
        expect(prisma.places.findMany).toHaveBeenCalledWith({
            skip: 0,
            take: 1,
            where:
                {
                    favourites: true
                },
            orderBy: {
                id: 'asc'
            }
        })
    })

    it('filter date place', async () => {
        mockPrismaService.places.findMany.mockResolvedValue([place])

        let result = await service.filterPlaces("date", 1, 1)

        expect(result).toEqual([place])
        expect(prisma.places.findMany).toHaveBeenCalledWith({
            skip: 0,
            take: 1,
            orderBy: {
                createdAt: 'desc',
            }
        })
    })
})