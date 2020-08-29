import { Injectable, Inject, BadRequestException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async findUser(email: string) {
    return await this.userRepository.find({
      where: {
        email
      }
    })
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
        return await this.userRepository.save(this.userRepository.create(user)) 
      } catch (error) {
        return error
      }
    }
  }
}
