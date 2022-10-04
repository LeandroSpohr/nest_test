import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AppConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: __dirname + '/../.env',
    }),
  ],
  providers: [ConfigService, AppConfig],
  exports: [ConfigService, AppConfig],
})
export class AppConfigModule {}
