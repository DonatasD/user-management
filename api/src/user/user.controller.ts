import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundInterceptor } from '../interceptor/not-found/not-found.interceptor';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.userService.create(createUserDto);
      if (!result) {
        throw new BadRequestException('invalid user');
      }
      return result;
    } catch (e) {
      throw new Error(e);
    }
  };

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseInterceptors(new NotFoundInterceptor('user not found'))
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(new NotFoundInterceptor('user not found'))
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseInterceptors(new NotFoundInterceptor('user not found'))
  remove(@Param('id') id: string) {
      return this.userService.remove(id);
  }
}
