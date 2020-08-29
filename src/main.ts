import { NestFactory } from '@nestjs/core'
import bodyParser from 'body-parser'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.setGlobalPrefix('api/v1')
  await app.listen(process.env.PORT)
} 

bootstrap()
