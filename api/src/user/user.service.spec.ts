import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import {
  mockInvalidUserId,
  mockUser,
  mockUserCreateDto,
  mockUsers,
  mockUserUpdateDto,
  userRepositoryMock,
} from './user.mock';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MockType } from '../utils/mock/mock.types';
import faker from 'faker';

describe('UserService', () => {
  let service: UserService;
  let repository: MockType<Repository<User>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService, {
          provide: getRepositoryToken(User),
          useFactory: userRepositoryMock,
        }
      ],
    }).compile();

    service = module.get(UserService);
    repository = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('findAll()', () => {
    it('should successfully return users', async () => {
      const expected = mockUsers();
      repository.find.mockReturnValue(expected);
      const result = await service.findAll();
      expect(repository.find).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should successfully return no users', async () => {
      const expected = [];
      repository.find.mockReturnValue(expected);
      const result = await service.findAll();
      expect(repository.find).toBeCalled();
      expect(result).toEqual(expected);
    });
  });

  describe('findOne()',  () => {
    it('should successfully return user', async () => {
      const expected = mockUser();
      repository.findOne.mockReturnValue(expected);
      const result = await service.findOne(expected.id);
      expect(repository.findOne).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should find no user', async () => {
      const result = await service.findOne(mockInvalidUserId());
      expect(repository.findOne).toBeCalled();
      expect(result).toEqual(null);
    });
  });

  describe('create()', () => {
    it('should successfully create a user', async () => {
      const expected = mockUserCreateDto();
      const result = await repository.create(expected);
      expect(repository.create).toBeCalled();
      expect(result).toEqual(expect.objectContaining(expected));
    });
  });

  describe('update()', () => {
    it('should successfully update a user', async () => {
      const expected = mockUserUpdateDto();
      const id = faker.random.uuid();
      const result = await repository.update(id, expected);
      expect(repository.update).toBeCalled();
      expect(result).toEqual(expect.objectContaining(expected));
    });
  });

  describe('remove()', () => {
    it('should successfully delete user', async () => {
      const id = faker.random.uuid();
      await repository.remove(id);
      expect(repository.remove).toBeCalled();
    });
  });
});
