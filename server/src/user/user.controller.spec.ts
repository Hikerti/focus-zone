import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/UserCreateDto.dto';

describe('UserController', () => {
    let controller: UserController;
    let mockUserService = {
        create: jest.fn(),
        getUserById: jest.fn(),
        getUserByEmail: jest.fn(),
        getUsers: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{ provide: UserService, useValue: mockUserService }],
        }).compile();

        controller = module.get<UserController>(UserController);
    });

    it('should call create on userService with dto', async () => {
        const dto: UserCreateDto = {
            name: 'John',
            surname: 'Doe',
            email: 'test@example.com',
            login: 'johnny',
            password: '12345678',
            phone: '123456789',
            adress: 'Some street',
            description: 'Cool guy',
        };

        const createdUser = { id: '1', ...dto };
        mockUserService.create.mockResolvedValue(createdUser);

        const result = await controller.create(dto);
        expect(result).toEqual(createdUser);
        expect(mockUserService.create).toHaveBeenCalledWith(dto);
    });

    it('should call getUserById on userService with id', async () => {
        const user = { id: '1', name: 'John' };
        mockUserService.getUserById.mockResolvedValue(user);

        const result = await controller.getUserById('1');
        expect(result).toEqual(user);
        expect(mockUserService.getUserById).toHaveBeenCalledWith('1');
    });

    it('should call getUserByEmail on userService with email', async () => {
        const user = { email: 'test@example.com', name: 'John' };
        mockUserService.getUserByEmail.mockResolvedValue(user);

        const result = await controller.getUserByEmail('test@example.com');
        expect(result).toEqual(user);
        expect(mockUserService.getUserByEmail).toHaveBeenCalledWith('test@example.com');
    });

    it('should return all users from userService', async () => {
        const users = [{ id: '1' }, { id: '2' }];
        mockUserService.getUsers.mockResolvedValue(users);

        const result = await controller.getUsers();
        expect(result).toEqual(users);
        expect(mockUserService.getUsers).toHaveBeenCalled();
    });
});
