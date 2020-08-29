import { Controller, Get, Body, HttpCode } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  getUser(@Body() user: any) {
    return { teste: this.userService.getUser(user.email) }
  }
}
