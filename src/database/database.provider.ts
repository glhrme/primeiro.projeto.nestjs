import { createConnection } from 'typeorm'

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_HOST, 10),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
      migrations: [
        "./migration/**/*.ts"
      ],
      subscribers: [
        "../subscriber/**/*.ts"
      ],
      synchronize: false
    })
  }
]