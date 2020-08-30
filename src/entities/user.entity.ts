import { 
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"
import { IsEmail, IsString, MinLength } from 'class-validator'
import { ERRORS_VALIDATION, MIN_LENGTH } from '../contants'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @IsString({ message: ERRORS_VALIDATION.STRING })
  @MinLength(MIN_LENGTH.NAME, {
    message: ERRORS_VALIDATION.NAME
  })
  name: string;

  @Column()
  @IsString({ message: ERRORS_VALIDATION.STRING })
  @MinLength(MIN_LENGTH.PW, {
    message: ERRORS_VALIDATION.PW_LENGTH
  })
  password: string;
  
  @Column()
  @IsEmail({  }, {
    message: ERRORS_VALIDATION.EMAIL
  })
  email: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}