import { validate } from 'class-validator'
import IUser from './interfaces/user.interface'
import { User } from '../../database/entities/user.entity'
import { BadRequestException } from '@nestjs/common'
import AuthUtils from 'controllers/auth/auth.utils'

export default class UserUtils {
  static async validateModelUser(_user: IUser) {
    const user = new User()
    user.email = _user.email
    user.name = _user.name
    user.password = await AuthUtils.hashPassword(_user.password)
    user.tokenValidateEmail = Math.random().toString(36)
    const errors = await validate(user)
    if (errors.length === 0) {
      return user
    }
    throw new BadRequestException(errors)
  }
  
}