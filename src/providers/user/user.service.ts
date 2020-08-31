import { Injectable, Inject, BadRequestException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../../database/entities/user.entity'
import IUser from './interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) { }

  //Para fazer login
  async getUser(email: string) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email
        }
      })
      return user
    } catch (error) {
      return false
    }
  }

  //Criar um usuário no banco
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
        delete createdUser.password
        return createdUser
      } catch (error) {
        return error
      }
    }
  
  }

  async updateUser(_email: string, _user: IUser) {
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
