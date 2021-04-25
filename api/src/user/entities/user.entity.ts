import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../shared/entity';

@Entity()
export class User extends BaseEntity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsEmail()
  @IsNotEmpty()
  @Column()
  @Index({ unique: true })
  email: string;

  @Column({ select: false })
  @Exclude()
  password: string;
}
