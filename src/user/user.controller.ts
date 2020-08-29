import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common'
import User from './user.validator'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  getUser() {
    this.userService.findAll().then(user => console.log(user))
    return true
  }

  @Post()
  async create(@Body() user: User) {
    return this.userService.createUser(user)
  }
}
