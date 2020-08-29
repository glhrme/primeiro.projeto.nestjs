import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import IUser from './user.model'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  createUser(user: IUser) {
    try {
      const x = this.userRepository.create(user)
      return this.userRepository.save(x)
    } catch (error) {
      return error
    }
  }
}
