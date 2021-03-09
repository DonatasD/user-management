import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';
import { envFilePath } from './config/env.config';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: envFilePath(),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.get<TypeOrmModuleOptions>('db');
      },
    }),
    HealthModule,
    UserModule,
    DashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
