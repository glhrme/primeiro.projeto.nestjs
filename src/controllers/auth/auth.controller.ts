import { Controller, UseGuards, Post, Body, Request, Get } from '@nestjs/common'
import { LocalAuthGuard } from './validations/local-auth.guard'
import IUser from '../../providers/user/interfaces/user.interface'
import UserUtils from '../../providers/user/user.utils'
import { UserService } from '../../providers/user/user.service'
import { AuthService } from './auth.service'
import { User } from '../../database/entities/user.entity'
import { AdminAuthGuard } from './validations/admin-auth.guard'
import { JwtAuthGuard } from './validations/jwt-auth.guard'

@Controller('auth')
export class AuthController {

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() { user } : { user: User }) {
    return await this.authService.login(user)
  }

  @Post('signup')
  async signup(@Body() _user: IUser) {
    const user = await UserUtils.validateModelUser(_user)
    return this.userService.createUser(user)
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin')
  async admin(@Request() req) {
    return true
  }
}
