import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConnectionDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/models/entities/*.ts'],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
});
