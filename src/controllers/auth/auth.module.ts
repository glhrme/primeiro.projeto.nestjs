import { AuthService } from './auth.service'
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from 'providers/user/user.module'
import { LocalStrategy } from './validations/local.strategy'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [
    AuthController
  ],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'process.env.SECRET_KEY',
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [
    AuthService,
    LocalStrategy
  ]
})
export class AuthModule { }
