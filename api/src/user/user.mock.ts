import { User } from './entities/user.entity';
import * as faker from 'faker';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { MockType } from '../utils/mock/mock.types';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const NOT_FOUND_IDS = Array.from({ length: 10 }, () =>
  faker.datatype.uuid(),
);
export const mockInvalidUserId = () => faker.helpers.randomize(NOT_FOUND_IDS);

export const mockUser = (user: Partial<User> = {}): User => {
  return new User({
    id: faker.datatype.uuid(),
    email: faker.internet.email(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    ...user,
  });
};

export const mockUsers = (length: number = 5): User[] => {
  return Array.from({ length }, () => mockUser());
};

export const mockUserCreateDto = (): CreateUserDto => {
  return new CreateUserDto({
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
};

export const mockUserUpdateDto = (): UpdateUserDto => {
  return new UpdateUserDto({});
};

export const userRepositoryMock: () => MockType<Repository<User>> = jest.fn(
  () => ({
    find: jest.fn(() => mockUsers()),
    findOne: jest.fn((id) =>
      NOT_FOUND_IDS.includes(id) ? null : mockUser({ id }),
    ),
    create: jest.fn((createUserDto) => mockUser(createUserDto)),
    update: jest.fn((id, updateUserDto) => mockUser({ id, ...updateUserDto })),
    remove: jest.fn(() => (id) => (NOT_FOUND_IDS.includes(id) ? null : {})),
  }),
);

export const userServiceMock: () => MockType<UserService> = jest.fn(() => ({
  findAll: jest.fn(() => mockUsers()),
  findOne: jest.fn((id) =>
    NOT_FOUND_IDS.includes(id) ? null : mockUser({ id }),
  ),
  create: jest.fn((createUserDto) =>
    mockUser({
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  ),
  update: jest.fn((id, updateUserDto) =>
    mockUser({ id, ...updateUserDto, updatedAt: new Date() }),
  ),
  remove: jest.fn((id) => (NOT_FOUND_IDS.includes(id) ? null : {})),
}));
