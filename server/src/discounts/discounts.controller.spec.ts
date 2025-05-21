import {Test, TestingModule} from "@nestjs/testing";
import {DiscountsController} from "./discounts.controller";
import {DiscountsService} from "./discounts.service";
import {CreateDiscountDto} from "./dto/CreateDescount.dto";
import {UpdateDescountDto} from "./dto/UpdateDescount.dto";

describe('Discount controller test', () => {
    let controller: DiscountsController;
    let mockPlacesService ={
        getDiscount: jest.fn(),
        getDiscountUserId: jest.fn(),
        getDiscountCafeId: jest.fn(),
        createDiscounts: jest.fn(),
        updateDiscounts: jest.fn(),
        deleteDiscount: jest.fn(),
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
            controllers: [DiscountsController],
            providers: [{ provide: DiscountsService, useValue: mockPlacesService }],
        }).compile();

        controller = module.get<DiscountsController>(DiscountsController);
    });

    afterEach(async () => {
        jest.clearAllMocks();
    })

    it('should all discount', async () => {
        mockPlacesService.getDiscount.mockReturnValue([discount])

        const result = await controller.getDiscount();

        expect(result).toEqual([discount]);
        expect(mockPlacesService.getDiscount).toHaveBeenCalledWith();
    })

    it('should by userId discount', async () => {
        mockPlacesService.getDiscountUserId.mockReturnValue([discount])

        const result = await controller.getDiscountUserId('1');

        expect(result).toEqual([discount]);
        expect(mockPlacesService.getDiscountUserId).toHaveBeenCalledWith('1');
    })

    it('should by cafeId discount', async () => {
        mockPlacesService.getDiscountCafeId.mockReturnValue([discount])

        const result = await controller.getDiscountCafeId('1');

        expect(result).toEqual([discount]);
        expect(mockPlacesService.getDiscountCafeId).toHaveBeenCalledWith(1);
    })

    it('create discount', async () => {
        const dto: CreateDiscountDto = {
            userId: '1',
            cafeId: 1,
            url: 'http://',
            logo: 'http://',
            title: 'testTitle',
            description: 'testDescription',
        }

        mockPlacesService.createDiscounts.mockReturnValue({
            id: 1,
            ...dto
        })

        const result = await controller.createDiscounts(dto);

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPlacesService.createDiscounts).toHaveBeenCalledWith(dto);
    })

    it('update discount', async () => {
        const dto: UpdateDescountDto = {
            title: 'testTitle2',
        }

        mockPlacesService.updateDiscounts.mockReturnValue({
            id: 1,
            ...dto
        })

        const result = await controller.updateDiscounts(dto, '1');

        expect(result).toEqual({
            id: 1,
            ...dto
        });
        expect(mockPlacesService.updateDiscounts).toHaveBeenCalledWith(1, dto);
    })

    it('delete discount', async () => {
        mockPlacesService.deleteDiscount.mockReturnValue(discount)

        const result = await controller.deleteDiscount('1');

        expect(result).toEqual(discount);
        expect(mockPlacesService.deleteDiscount).toHaveBeenCalledWith(1);
    })
})