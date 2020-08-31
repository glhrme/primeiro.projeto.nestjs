import { AuthService } from './auth.service'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'providers/user/user.module'
import { LocalStrategy } from './local.strategy'
import { AuthController } from './auth.controller'

@Module({
  controllers: [
    AuthController
  ],
  imports: [
    UserModule,
    PassportModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ]
})
export class AuthModule { }
