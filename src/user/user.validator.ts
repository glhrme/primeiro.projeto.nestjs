import { IsString, IsEmail } from 'class-validator'

export default class UserValidator {
  @IsString() readonly name: string
  @IsEmail() readonly email: string
  @IsString() readonly password: string
}