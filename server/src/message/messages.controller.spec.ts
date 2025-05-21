import {MessageController} from "./message.controller";
import {Test, TestingModule} from "@nestjs/testing";
import {MessageService} from "./message.service";
import {CreateMessageDto} from "./dto/CreateMessage.dto";
import {UpdateMessageDto} from "./dto/UpdateMessage.dto";

describe('Message Controller Test', () => {
    let controller: MessageController;
    let mockMessageService ={
        getUserMessage: jest.fn(),
        getCafeMessage: jest.fn(),
        getIdMessage: jest.fn(),
        createMessage: jest.fn(),
        updateMessage: jest.fn(),
        deleteMessage: jest.fn(),
    };

    const expectedMessage = [
        { id: 1, userId: '1', cafeId: 1, content: 'test' }
    ];

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MessageController],
            providers: [{ provide: MessageService, useValue: mockMessageService }],
        }).compile();

        controller = module.get<MessageController>(MessageController);
    });

    afterEach(async () => {
        jest.clearAllMocks();
    })

    it('should return message by id', async () => {
        mockMessageService.getIdMessage.mockReturnValueOnce(expectedMessage);

        const result = await controller.getIdMessage('1');

        expect(result).toEqual(expectedMessage);
        expect(mockMessageService.getIdMessage).toHaveBeenCalledWith(1);
    });

    it('should return message by userId', async () => {
        mockMessageService.getUserMessage.mockReturnValueOnce(expectedMessage);

        const result = await controller.getUserMessage('1');
        expect(result).toEqual(expectedMessage);
        expect(mockMessageService.getUserMessage).toHaveBeenCalledWith('1')
    });

    it('should return message by cafeId', async () => {
        mockMessageService.getCafeMessage.mockReturnValueOnce(expectedMessage);

        const result = await controller.getCafeMessage('1');
        expect(result).toEqual(expectedMessage);
        expect(mockMessageService.getCafeMessage).toHaveBeenCalledWith(1)
    });

    it('should create message', async () => {
        const dto: CreateMessageDto = {
            userId: '1',
            cafeId: 1,
            content: 'test'
        }

        mockMessageService.createMessage.mockReturnValueOnce({ id: 1, ...dto});

        let result = await controller.createMessage(dto)

        expect(result).toEqual({id: 1, ...dto})
        expect(mockMessageService.createMessage).toHaveBeenCalledWith(dto)
    })

    it('update message', async () => {
        const dto: UpdateMessageDto = {
            content: 'test2'
        }

        mockMessageService.updateMessage.mockReturnValueOnce({ id: 1, ...dto});

        let result = await controller.updateMessage('1', dto)

        expect(result).toEqual({id: 1, ...dto})
        expect(mockMessageService.updateMessage).toHaveBeenCalledWith(1, dto);
    })

    it('delete message', async () => {
        const message = {
            id: 1,
            userId: '1',
            cafeId: 1,
            content: 'test'
        }

        mockMessageService.deleteMessage.mockReturnValueOnce(message);

        let result = await controller.deleteMessage('1');

        expect(result).toEqual(message);
        expect(mockMessageService.deleteMessage).toHaveBeenCalledWith(1);
    })
})