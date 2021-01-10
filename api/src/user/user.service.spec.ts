import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { mockInvalidUserId, mockUser, mockUsers, userRepositoryMock } from './user.mock';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MockType } from '../utils/mock/mock.types';

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
    it('should successfully return users', () => {
      const expected = mockUsers();
      repository.find.mockReturnValue(expected);
      const result = service.findAll();
      expect(repository.find).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should successfully return no users', () => {
      const expected = [];
      repository.find.mockReturnValue(expected);
      const result = service.findAll();
      expect(repository.find).toBeCalled();
      expect(result).toEqual(expected);
    });
  });

  describe('findOne()', () => {
    it('should successfully return user', () => {
      const expected = mockUser();
      repository.findOne.mockReturnValue(expected);
      const result = service.findOne(expected.id);
      expect(repository.findOne).toBeCalled();
      expect(result).toEqual(expected);
    });

    it('should find no user', () => {
      const result = service.findOne(mockInvalidUserId());
      expect(repository.findOne).toBeCalled();
      expect(result).toEqual(null);
    });
  });
});
