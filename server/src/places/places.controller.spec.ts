import {Test, TestingModule} from "@nestjs/testing";
import {PlacesService} from "./places.service";
import {PlacesController} from "./places.controller";
import {CreatePlacesDto} from "./dto/CreatePlaces.dto";
import {UpdatePlacesDto} from "./dto/UpdatePlaces.dto";

describe('Places controller tests', () => {
    let controller: PlacesController;
    let mockPlacesService ={
        getPlaces: jest.fn(),
        getPlacesById: jest.fn(),
        filterPlaces: jest.fn(),
        createPlaces: jest.fn(),
        updateField: jest.fn(),
        deletePlaces: jest.fn(),
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
            controllers: [PlacesController],
            providers: [{ provide: PlacesService, useValue: mockPlacesService }],
        }).compile();

        controller = module.get<PlacesController>(PlacesController);
    });

    afterEach(async () => {
        jest.clearAllMocks();
    })

    it('should all places', async () => {
        mockPlacesService.getPlaces.mockReturnValue([place]);

        const result = await controller.getPlaces();
        expect(result).toEqual([place])
        expect(mockPlacesService.getPlaces).toHaveBeenCalledWith();
    })

    it('should place by id', async () => {
        mockPlacesService.getPlacesById.mockReturnValue(place);

        const result = await controller.getPlacesById('1');
        expect(result).toEqual(place)
        expect(mockPlacesService.getPlacesById).toHaveBeenCalledWith(1);
    })

    it('create place', async () => {
        const dto: CreatePlacesDto = {
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
            locationLng: "34.3243432"
        }

        mockPlacesService.createPlaces.mockReturnValue(place);

        const result = await controller.createPlaces(dto);
        expect(result).toEqual(place)
        expect(mockPlacesService.createPlaces).toHaveBeenCalledWith(dto);
    })

    it('update field places', async () => {
        const dto: UpdatePlacesDto = {
            favourites: true
        }

        mockPlacesService.updateField.mockReturnValue({id: 1, ...dto});

        let result = await controller.updateField(dto, '1');
        expect(result).toEqual({id: 1, ...dto});
        expect(mockPlacesService.updateField).toHaveBeenCalledWith(1, dto);
    })

    it('delete field places', async () => {
        mockPlacesService.deletePlaces.mockReturnValue(place);

        let result = await controller.deletePlaces('1');
        expect(result).toEqual(place);
        expect(mockPlacesService.deletePlaces).toHaveBeenCalledWith(1);
    })
})