import {UserService} from "./user.service";
import { PrismaService } from '../prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import {UserCreateDto} from "src/user/dto/UserCreateDto.dto";
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
    hash: jest.fn(),
}));

describe('User Service', () => {
    let service: UserService;
    let prisma: PrismaService;

    const mockPrismaService = {
        user: {
            findFirst: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
        },
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                { provide: PrismaService, useValue: mockPrismaService },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return user by id', async () => {
        const user = {id: "1", name: "John"};
        mockPrismaService.user.findFirst.mockResolvedValue(user);

        const result = await service.getUserById("1")
        expect(result).toEqual(user);
        expect(prisma.user.findFirst).toHaveBeenCalledWith({where: {id: "1"}});
    })

    it('should return all users', async () => {
        const users = [
            {id: '1', name: 'John'},
            {id: '2', name: 'John'}
        ];
        mockPrismaService.user.findMany.mockResolvedValue(users);

        const result = await service.getUsers()
        expect(result).toEqual(users);
        expect(prisma.user.findMany).toHaveBeenCalledWith();
    })

    it('should return user by email', async () => {
        const user = {id: '1', email: 'test@mail.ru'}
        mockPrismaService.user.findFirst.mockResolvedValue(user);

        const result = await service.getUserByEmail('test@mail.ru');
        expect(result).toEqual(user);
        expect(prisma.user.findFirst).toHaveBeenCalledWith({
            where: {email: 'test@mail.ru'}
        });
    })

    it('should return user create', async () => {
        const dto:UserCreateDto = {
            email: 'test@example.com',
            password: 'plainpass',
            name: 'John',
            surname: 'Doe',
            login: 'johndoe',
            phone: '1234567890',
            adress: '123 Main St',
            description: 'Test user',
        }

        const hashedPassword = 'hashedpassword123';
        (bcrypt.hash as jest.Mock).mockResolvedValue(hashedPassword);

        const createUser = {id: '1', ...dto, password: hashedPassword};
        mockPrismaService.user.create.mockResolvedValue(createUser);

        const result = await service.create(dto);
        expect(result).toEqual(createUser)
        expect(prisma.user.create).toHaveBeenCalledWith({
            data: {
                ...dto,
                password: hashedPassword
            }
        })
    })
})