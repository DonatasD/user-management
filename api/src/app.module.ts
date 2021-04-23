import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';
import { getEnvFilePaths } from './utils/environment';
import { DashboardModule } from './dashboard/dashboard.module';
import appConfig from './config/appConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [registerAs('db', () => appConfig.db)],
      envFilePath: getEnvFilePaths(),
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
