/*

export class UserController {
  constructor(private readonly userService: UserService) { }

  async getUser(@Body() { email, password } : IUser) {
    return await this.userService.validateUser(email, password)
  }

  async create(@Body() _user: IUser) {
    const user = await UserUtils.validateModelUser(_user)
    return this.userService.createUser(user)
  }
  
  async update(@Param('email') email: string, @Body() _user: IUser) {
    await UserUtils.validateModelUser(_user)
    return this.userService.updateUser(email, _user)
  }

  
  async delete(@Param('email') email: string) {
    return this.userService.deleteUser(email)
  }
}
*/
