import { UserService } from './user.service'
import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { userProviders } from './user.provider'

@Module({
  imports: [
    DatabaseModule
  ],
  exports: [
    UserService
  ],
  providers: [
    ...userProviders,
    UserService
  ]
})
export class UserModule { }
