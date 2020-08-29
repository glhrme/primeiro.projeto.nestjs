import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common'
import IUser from './interfaces/user.interface'
import { UserService } from './user.service'
import UserUtils from './user.utils'

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
  async create(@Body() _user: IUser) {
    const user = await UserUtils.validateUser(_user)
    return this.userService.createUser(user)
  }
}
