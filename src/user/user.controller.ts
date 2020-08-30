import { Controller, Get, HttpCode, Post, Body, Put, Param, Delete } from '@nestjs/common'
import IUser from './interfaces/user.interface'
import { UserService } from './user.service'
import UserUtils from './user.utils'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(200)
  async getUser(@Body() { email, password } : IUser) {
    return await this.userService.findUser(email, password)
  }

  @Post()
  async create(@Body() _user: IUser) {
    const user = await UserUtils.validateUser(_user)
    return this.userService.createUser(user)
  }

  @Put(':email')
  async update(@Param('email') email: string, @Body() _user: IUser) {
    await UserUtils.validateUser(_user)
    return this.userService.updateUser(email, _user)
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return this.userService.deleteUser(email)
  }
}
