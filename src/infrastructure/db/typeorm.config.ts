import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

import AppConfig from '../../config/app.config';
import { AppConfigModule } from '../../appconfig.module';

export default class TypeOrmConfig {
  static getOrmConfig(appConfig: AppConfig): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: appConfig.dbHost,
      port: appConfig.dbPort,
      username: appConfig.dbUserName,
      password: appConfig.dbPassword,
      database: appConfig.dbName,
      // entities: [__dirname + '/../../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [AppConfigModule],
  useFactory: async (appConfig: AppConfig): Promise<TypeOrmModuleOptions> =>
    TypeOrmConfig.getOrmConfig(appConfig),
  inject: [AppConfig],
};
