import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'db',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    synchronize: true,
    autoLoadEntities: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    schema: process.env.DB_SCHEMA,
    keepConnectionAlive: true,
  }),
);
