import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'providers/user/user.service'
import AuthUtils from './auth.utils'
import { User } from 'database/entities/user.entity'
import { TOKEN_PAYLOAD } from 'contants'

@Injectable()
export class AuthService { 
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) { }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUser(email)
    if (user && await AuthUtils.comparePassword(password, user.password)) {
      delete user.password
      return user
    } else {
      return false
    }
  }

  async login(user: User) {
    const payload: TOKEN_PAYLOAD = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
