import { Injectable, Inject, BadRequestException, UnauthorizedException } from '@nestjs/common'
import { Repository } from 'typeorm'
import UserUtils from './user.utils'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) { }

  async findUser(email: string, password: string) {
    const user = await this.userRepository.findOne({
      where: {
        email
      }
    })
    if(await UserUtils.comparePassword(password, user.password)) {
      return {
        ...user,
        password: null
      }
    } else {
      throw new UnauthorizedException('Usuário ou senha inválidos')
    }
  }

  async createUser(user: User) {
    if (await this.userRepository.findOne(
      {
        where: {
          email: user.email
        }
      }
    )) {
      throw new BadRequestException({
        message: `Usuario ja existente ${user.email}`
      })
    } else {
      try {
        const createdUser = this.userRepository.create(user)
        await this.userRepository.save(createdUser)
        return {
          ...createdUser,
          password: null
        }
      } catch (error) {
        return error
      }
    }
  }

  async updateUser(_email: string, _user) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: _email
        }
      })

      Object.keys(user).forEach(key => {
        if(_user[key]) {
          user[key] = _user[key]
        }
      })
      return await this.userRepository.save(user)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async deleteUser(email: string) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: email
        }
      })
      
      return await this.userRepository.remove(user)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
