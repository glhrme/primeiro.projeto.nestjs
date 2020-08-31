import { validate } from 'class-validator'
import IUser from './interfaces/user.interface'
import { User } from 'entities/user.entity'
import { BadRequestException } from '@nestjs/common'

export default class UserUtils {
  static async validateModelUser(_user: IUser) {
    const user = new User()
    user.email = _user.email
    user.name = _user.name
    user.password = _user.password
    const errors = await validate(user)
    if (errors.length === 0) {
      return user
    }
    throw new BadRequestException(errors)
  }
  
}