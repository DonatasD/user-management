import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @IsEmail()
  @IsNotEmpty()
  @Column()
  @Index({ unique: true })
  private email: string

  @Column({ select: false })
  private password: string;

  @CreateDateColumn({type: "timestamp"})
  private createdAt: Date;

  @UpdateDateColumn({type: "timestamp"})
  private updatedAt: Date;
}
