import {PrismaService} from "../prisma/prisma.service";
import {Test, TestingModule} from "@nestjs/testing";
import {AchievementService} from "./achievement.service";
import {CreateAchievementDto} from "./dto/CreateAchievement.dto";
import {UpdateAchievementtDto} from "./dto/UpdateAchievement.dto";

describe('Achivement service test', () => {
    let service: AchievementService;
    let prisma: PrismaService;

    const mockPrismaService = {
        achievement: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    const achievement = {
        id: 1,
        userId: '1',
        cafeId: 1,
        url: 'http://',
        title: 'testTitle',
        description: 'testDescription',
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AchievementService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<AchievementService>(AchievementService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should all achievement ', async () => {
        mockPrismaService.achievement.findMany.mockResolvedValue([achievement]);

        let result = await service.getAchievement()

        expect(result).toEqual([achievement]);
        expect(mockPrismaService.achievement.findMany).toHaveBeenCalledWith({});
    })

    it('should by userId achievement ', async () => {
        mockPrismaService.achievement.findMany.mockResolvedValue([achievement]);

        let result = await service.getAchievementUserId('1')

        expect(result).toEqual([achievement]);
        expect(mockPrismaService.achievement.findMany).toHaveBeenCalledWith({
            where: {userId: '1'},
        });
    })

    it('should by cafeId achievement ', async () => {
        mockPrismaService.achievement.findMany.mockResolvedValue([achievement]);

        let result = await service.getAchievementCafeId(1)

        expect(result).toEqual([achievement]);
        expect(mockPrismaService.achievement.findMany).toHaveBeenCalledWith({
            where: {cafeId: 1},
        });
    })

    it('create achievement', async () => {
        const dto: CreateAchievementDto = {
            userId: '1',
            cafeId: 1,
            url: 'http://',
            title: 'testTitle',
            description: 'testDescription',
        }

        mockPrismaService.achievement.create.mockResolvedValue({
            id: 1,
            ...dto
        });

        let result = await service.createAchievement(dto)

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPrismaService.achievement.create).toHaveBeenCalledWith({
            data: dto,
        });
    })

    it('should all achievement ', async () => {
        const dto: UpdateAchievementtDto = {
            title: 'testTitle2',
        }

        mockPrismaService.achievement.update.mockResolvedValue({
            id: 1,
            dto
        });

        let result = await service.updateAchievement(1, dto)

        expect(result).toEqual({
            id: 1,
            dto
        });
        expect(mockPrismaService.achievement.update).toHaveBeenCalledWith({
            where: {id: 1},
            data: dto
        });
    })

    it('should all achievement ', async () => {
        mockPrismaService.achievement.delete.mockResolvedValue(achievement);

        let result = await service.deleteAchievement(1)

        expect(result).toEqual(achievement);
        expect(mockPrismaService.achievement.delete).toHaveBeenCalledWith({
            where: {id: 1},
        });
    })
})