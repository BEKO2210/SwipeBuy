import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bull';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import * as Joi from 'joi';

// Import Modules (werden später erstellt)
// import { AuthModule } from './modules/auth/auth.module';
// import { UsersModule } from './modules/users/users.module';
// import { ProductsModule } from './modules/products/products.module';
// import { OrdersModule } from './modules/orders/orders.module';
// import { PaymentsModule } from './modules/payments/payments.module';
// import { AiModule } from './modules/ai/ai.module';
// import { LiveShoppingModule } from './modules/live-shopping/live-shopping.module';
// import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'staging')
          .default('development'),
        PORT: Joi.number().default(3000),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().default('15m'),
        REDIS_HOST: Joi.string().default('localhost'),
        REDIS_PORT: Joi.number().default(6379),
      }),
    }),

    // Database
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') === 'development',
        logging: configService.get('NODE_ENV') === 'development',
        autoLoadEntities: true,
        ssl: configService.get('NODE_ENV') === 'production' ? {
          rejectUnauthorized: false,
        } : false,
      }),
      inject: [ConfigService],
    }),

    // GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req, res }) => ({ req, res }),
      subscriptions: {
        'graphql-ws': {
          onConnect: (context: any) => {
            const { connectionParams, extra } = context;
            // Validate connection
            extra.user = connectionParams.Authorization;
          },
        },
      },
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error.extensions?.exception?.response?.message || error.message,
          code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
          timestamp: new Date().toISOString(),
        };
        return graphQLFormattedError;
      },
    }),

    // Rate Limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL', 60),
        limit: config.get('THROTTLE_LIMIT', 100),
      }),
    }),

    // Queue Management
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          password: configService.get('REDIS_PASSWORD'),
          db: configService.get('REDIS_DB', 0),
        },
      }),
      inject: [ConfigService],
    }),

    // Caching
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: 60,
        max: 100,
        isGlobal: true,
      }),
      inject: [ConfigService],
    }),

    // Scheduler
    ScheduleModule.forRoot(),

    // Feature Modules (werden später hinzugefügt)
    // AuthModule,
    // UsersModule,
    // ProductsModule,
    // OrdersModule,
    // PaymentsModule,
    // AiModule,
    // LiveShoppingModule,
    // AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
