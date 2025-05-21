import {PrismaService} from "../prisma/prisma.service";
import {Test, TestingModule} from "@nestjs/testing";
import {DiscountsService} from "./discounts.service";
import {CreateDiscountDto} from "./dto/CreateDescount.dto";
import {UpdateDescountDto} from "./dto/UpdateDescount.dto";

describe('Discount service test', () => {
    let service: DiscountsService;
    let prisma: PrismaService;

    const mockPrismaService = {
        discounts: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    const discount = {
        id: 1,
        userId: '1',
        cafeId: 1,
        url: 'http://',
        logo: 'http://',
        title: 'testTitle',
        description: 'testDescription',
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DiscountsService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<DiscountsService>(DiscountsService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should all discount ', async () => {
        mockPrismaService.discounts.findMany.mockResolvedValue([discount]);

        let result = await service.getDiscount()

        expect(result).toEqual([discount]);
        expect(mockPrismaService.discounts.findMany).toHaveBeenCalledWith({});
    })

    it('should by userId discount ', async () => {
        mockPrismaService.discounts.findMany.mockResolvedValue([discount]);

        let result = await service.getDiscountCafeId(1)

        expect(result).toEqual([discount]);
        expect(mockPrismaService.discounts.findMany).toHaveBeenCalledWith({
            where: {cafeId: 1},
        });
    })

    it('should by cafeId discount ', async () => {
        mockPrismaService.discounts.findMany.mockResolvedValue([discount]);

        let result = await service.getDiscountUserId('1')

        expect(result).toEqual([discount]);
        expect(mockPrismaService.discounts.findMany).toHaveBeenCalledWith({
            where: {userId: '1'},
        });
    })

    it('create discounts', async () => {
        const dto: CreateDiscountDto = {
            userId: '1',
            cafeId: 1,
            url: 'http://',
            logo: 'http://',
            title: 'testTitle',
            description: 'testDescription',
        }

        mockPrismaService.discounts.create.mockResolvedValue({
            id: 1,
            ...dto
        });

        let result = await service.createDiscounts(dto)

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPrismaService.discounts.create).toHaveBeenCalledWith({
            data: dto,
        });
    })

    it('should all discount ', async () => {
        const dto: UpdateDescountDto = {
            title: 'testTitle2',
        }

        mockPrismaService.discounts.update.mockResolvedValue({
            id: 1,
            dto
        });

        let result = await service.updateDiscounts(1, dto)

        expect(result).toEqual({
            id: 1,
            dto
        });
        expect(mockPrismaService.discounts.update).toHaveBeenCalledWith({
            where: {id: 1},
            data: dto
        });
    })

    it('should all discount ', async () => {
        mockPrismaService.discounts.delete.mockResolvedValue(discount);

        let result = await service.deleteDiscount(1)

        expect(result).toEqual(discount);
        expect(mockPrismaService.discounts.delete).toHaveBeenCalledWith({
            where: {id: 1},
        });
    })
})