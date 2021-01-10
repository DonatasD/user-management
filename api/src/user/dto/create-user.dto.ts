import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  constructor(user: Partial<CreateUserDto>) {
    Object.assign(this, user);
  };

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

}
