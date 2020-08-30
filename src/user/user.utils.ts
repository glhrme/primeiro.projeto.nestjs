import { validate } from 'class-validator'
import { hash, compare } from 'bcrypt'
import IUser from './interfaces/user.interface'
import { User } from 'entities/user.entity'
import { BadRequestException } from '@nestjs/common'

export default class UserUtils {
  static async validateUser(_user: IUser) {
    const user = new User()
    user.email = _user.email
    user.name = _user.name
    user.password = await this.hashPassword(_user.password)
    const errors = await validate(user)
    if (errors.length === 0) {
      return user
    }
    throw new BadRequestException(errors)
  }
  static async hashPassword(password: string) {
    return await hash(password, 5)
  }

  static async comparePassword(password: string, encrypted: string) {
    return await compare(password, encrypted)
  }
}