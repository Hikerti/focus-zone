import {Test, TestingModule} from "@nestjs/testing";
import {AchievementController} from "./achievement.controller";
import {AchievementService} from "./achievement.service";
import {CreateAchievementDto} from "./dto/CreateAchievement.dto";
import {UpdateAchievementtDto} from "./dto/UpdateAchievement.dto";

describe('Discount controller test', () => {
    let controller: AchievementController;
    let mockPlacesService ={
        getAchievement: jest.fn(),
        getAchievementUserId: jest.fn(),
        getAchievementCafeId: jest.fn(),
        createAchievement: jest.fn(),
        updateAchievement: jest.fn(),
        deleteAchievement: jest.fn(),
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
            controllers: [AchievementController],
            providers: [{ provide: AchievementService, useValue: mockPlacesService }],
        }).compile();

        controller = module.get<AchievementController>(AchievementController);
    });

    afterEach(async () => {
        jest.clearAllMocks();
    })

    it('should all achievement', async () => {
        mockPlacesService.getAchievement.mockReturnValue([achievement])

        const result = await controller.getAchievement();

        expect(result).toEqual([achievement]);
        expect(mockPlacesService.getAchievement).toHaveBeenCalledWith();
    })

    it('should by userId achievement', async () => {
        mockPlacesService.getAchievementUserId.mockReturnValue([achievement])

        const result = await controller.getAchievementUserId('1');

        expect(result).toEqual([achievement]);
        expect(mockPlacesService.getAchievementUserId).toHaveBeenCalledWith('1');
    })

    it('should by cafeId achievement', async () => {
        mockPlacesService.getAchievementCafeId.mockReturnValue([achievement])

        const result = await controller.getAchievementCafeId('1');

        expect(result).toEqual([achievement]);
        expect(mockPlacesService.getAchievementCafeId).toHaveBeenCalledWith(1);
    })

    it('create achievement', async () => {
        const dto: CreateAchievementDto = {
            userId: '1',
            cafeId: 1,
            url: 'http://',
            title: 'testTitle',
            description: 'testDescription',
        }

        mockPlacesService.createAchievement.mockReturnValue({
            id: 1,
            ...dto
        })

        const result = await controller.createAchievement(dto);

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPlacesService.createAchievement).toHaveBeenCalledWith(dto);
    })

    it('update achievement', async () => {
        const dto: UpdateAchievementtDto = {
            title: 'testTitle2',
        }

        mockPlacesService.updateAchievement.mockReturnValue({
            id: 1,
            ...dto
        })

        const result = await controller.updateAchievement(dto, '1');

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPlacesService.updateAchievement).toHaveBeenCalledWith(1, dto);
    })

    it('delete achievement', async () => {
        mockPlacesService.deleteAchievement.mockReturnValue(achievement)

        const result = await controller.deleteAchievement('1');

        expect(result).toEqual(achievement);
        expect(mockPlacesService.deleteAchievement).toHaveBeenCalledWith(1);
    })
})