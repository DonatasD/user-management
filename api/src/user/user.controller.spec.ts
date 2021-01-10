import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {
  mockInvalidUserId,
  mockUser,
  mockUserCreateDto,
  mockUsers,
  mockUserUpdateDto,
  userServiceMock,
} from './user.mock';
import * as faker from 'faker';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useFactory: userServiceMock }],
    }).compile();

    service = module.get(UserService);
    controller = module.get(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should successfully return users', async () => {
      const expected = mockUsers();
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(expected));
      const result = await controller.findAll();
      expect(service.findAll).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should successfully return no users', async () => {
      const expected = [];
      jest.spyOn(service, 'findAll').mockReturnValue(Promise.resolve(expected));
      const result = await service.findAll();
      expect(service.findAll).toBeCalled();
      expect(result).toEqual(expected);
    });
  });

  describe('findOne()', () => {
    it('should successfully return user', async () => {
      const expected = mockUser();
      jest.spyOn(service, 'findOne').mockReturnValue(Promise.resolve(expected));
      const result = await service.findOne(expected.id);
      expect(service.findOne).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should not find a user', () => {
      const result = service.findOne(mockInvalidUserId());
      expect(service.findOne).toBeCalled();
      expect(result).toEqual(null);
    });
  });

  describe('create()', () => {
    it('should successfully create user', async () => {
      const expected = mockUserCreateDto();
      const result = await service.create(expected);
      expect(service.create).toBeCalled();
      expect(result).toEqual(expect.objectContaining(expected));
    });
  });

  describe('update()', () => {
    it('should successfully update user', async () => {
      const expected = mockUserUpdateDto();
      const id = faker.random.uuid();
      const result = await service.update(id, expected);
      expect(service.update).toBeCalled();
      expect(result).toEqual(expect.objectContaining(expected));
    });
  });

  describe('remove()', () => {
    it('should successfully delete user', async () => {
      const id = faker.random.uuid();
      await service.remove(id);
      expect(service.remove).toBeCalled();
    });
  });
});
