import { Injectable } from '@nestjs/common'
import { UserService } from 'providers/user/user.service'
import AuthUtils from './auth.utils'

@Injectable()
export class AuthService { 
  constructor(private userService: UserService) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUser(email)
    if (user && await AuthUtils.comparePassword(password, user.password)) {
      delete user.password
      return user
    } else {
      return false
    }
  }
}
