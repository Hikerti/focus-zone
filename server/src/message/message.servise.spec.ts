import { PrismaService } from '../prisma/prisma.service';
import { MessageService } from './message.service';
import { Test, TestingModule } from '@nestjs/testing';
import {CreateMessageDto} from "src/message/dto/CreateMessage.dto";
import {UpdateMessageDto} from "src/message/dto/UpdateMessage.dto";

describe('MessageService', () => {
    let service: MessageService;
    let prisma: PrismaService;

    const messages = [
        { id: 1, userId: '1', cafeId: 1, content: 'test' },
        { id: 2, userId: '2', cafeId: 2, content: 'test' },
    ];

    const mockPrismaService = {
        message: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MessageService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<MessageService>(MessageService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return message by id', async () => {
        mockPrismaService.message.findMany.mockImplementation(({ where }) =>
            Promise.resolve(messages.filter(msg => msg.id === where.id)),
        );

        const result = await service.getIdMessage(1);
        expect(result).toEqual(
            [
                { id: 1, userId: '1', cafeId: 1, content: 'test' }
            ]
        );
        expect(prisma.message.findMany).toHaveBeenCalledWith({
            where: { id: 1 },
            orderBy: { createdAt: 'desc' }
        });
    });

    it('should return message by userId', async () => {
        mockPrismaService.message.findMany.mockImplementation(({ where }) =>
            Promise.resolve(messages.filter(msg => msg.userId === where.userId)),
        );

        const result = await service.getUserMessage('1');
        expect(result).toEqual(
            [
                { id: 1, userId: '1', cafeId: 1, content: 'test' }
            ]
        );
        expect(prisma.message.findMany).toHaveBeenCalledWith({
            where: { userId: '1' },
            orderBy: { createdAt: 'desc' }
        });
    });

    it('should return message by cafeId', async () => {
        mockPrismaService.message.findMany.mockImplementation(({ where }) =>
            Promise.resolve(messages.filter(msg => msg.cafeId === where.cafeId)),
        );
        const result = await service.getCafeMessage(1);
        expect(result).toEqual(
            [
                { id: 1, userId: '1', cafeId: 1, content: 'test' }
            ]
        );
        expect(prisma.message.findMany).toHaveBeenCalledWith({
            where: { cafeId: 1 },
            orderBy: { createdAt: 'desc' }
        });
    });

    it('should create message', async () => {
        const dto: CreateMessageDto = {
            userId: '1',
            cafeId: 1,
            content: 'test'
        }

        mockPrismaService.message.create.mockResolvedValue({id: 1, ...dto})

        let result = await service.createMessage(dto)

        expect(result).toEqual({id: 1, ...dto})
        expect(prisma.message.create).toHaveBeenCalledWith({
            data: dto
        })
    })

    it('update message', async () => {
        const dto: UpdateMessageDto = {
            content: 'test2'
        }

        mockPrismaService.message.update.mockResolvedValue({id: 1, ...dto})

        let result = await service.updateMessage(1, dto)

        expect(result).toEqual({id: 1, ...dto})
        expect(prisma.message.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: dto
        })
    })

    it('delete message', async () => {
        const message = {
            id: 1,
            userId: '1',
            cafeId: 1,
            content: 'test'
        }

        mockPrismaService.message.delete.mockResolvedValue(message);

        let result = await service.deleteMessage(1);
        expect(result).toEqual(message);
        expect(prisma.message.delete).toHaveBeenCalledWith({
            where: { id: 1 },
        })
    })
});
