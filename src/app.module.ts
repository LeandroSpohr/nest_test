import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from './appconfig.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['./src/models/entities/*.ts'],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      logging: true,
    }),
    AppConfigModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
