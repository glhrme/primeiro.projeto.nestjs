import { UserModule } from './user/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: process.env.PRODUCTION ? '.env' : '.env.development'
    })]
})
export class AppModule { }
