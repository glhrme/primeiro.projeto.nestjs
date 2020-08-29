import { DatabaseModule } from './database/database.module'
import { UserModule } from './user/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ConfigModule.forRoot({
      envFilePath: process.env.PRODUCTION ? '.env' : '.env.development'
    })]
})
export class AppModule { }
