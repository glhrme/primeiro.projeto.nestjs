import { UserModule } from 'providers/user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'
import { LocalStrategy } from './validations/local.strategy'
import { JwtStrategy } from './validations/jwt.strategy'
import { AdminStrategy } from './validations/admin.strategy'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import * as dotenv from 'dotenv'

dotenv.config({
  path: process.env.PRODUCTION ? '.env' : '.env.development'
})

@Module({
  controllers: [
    AuthController
  ],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: '' + process.env.SECRET_KEY,
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [
    AuthService,
    JwtStrategy,
    AdminStrategy,
    LocalStrategy
  ],
  exports: [AuthService]
})
export class AuthModule { }
