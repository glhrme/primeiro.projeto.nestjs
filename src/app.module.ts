import { AuthModule } from './controllers/auth/auth.module'
import { DatabaseModule } from './database/database.module'
import { UserModule } from './providers/user/user.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.PRODUCTION ? '.env' : '.env.development'
    }),
    DatabaseModule,
    UserModule,
    AuthModule
  ]
})
export class AppModule { }
