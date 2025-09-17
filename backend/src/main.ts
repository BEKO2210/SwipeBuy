import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const environment = configService.get<string>('NODE_ENV', 'development');

  // Security
  app.use(helmet({
    contentSecurityPolicy: environment === 'production' ? undefined : false,
    crossOriginEmbedderPolicy: environment === 'production',
  }));

  // CORS
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN', '*').split(','),
    credentials: configService.get<boolean>('CORS_CREDENTIALS', true),
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  });

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // WebSocket Adapter
  app.useWebSocketAdapter(new IoAdapter(app));

  // Swagger Documentation
  if (environment !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('SmartMatch Marketplace API')
      .setDescription('API Documentation für SmartMatch E-Commerce Platform mit AI Shopping')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('Authentication', 'User authentication and authorization')
      .addTag('Users', 'User management')
      .addTag('Products', 'Product management')
      .addTag('Orders', 'Order processing')
      .addTag('Payments', 'Payment processing')
      .addTag('AI', 'SmartMatch AI features')
      .addTag('Live Shopping', 'Live shopping sessions')
      .addTag('Admin', 'Admin dashboard endpoints')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      customSiteTitle: 'SmartMatch API Documentation',
      customfavIcon: 'https://nestjs.com/img/logo_text.svg',
      customJs: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
      ],
      customCssUrl: [
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
      ],
    });
  }

  // Graceful Shutdown
  app.enableShutdownHooks();

  // Start Server
  await app.listen(port);
  
  console.log(`
    🚀 SmartMatch Marketplace Backend
    📍 Environment: ${environment}
    🌐 Server running on: http://localhost:${port}
    📚 API Documentation: http://localhost:${port}/api/docs
    🔌 WebSocket Server: ws://localhost:${port}
    ⚡ GraphQL Playground: http://localhost:${port}/graphql
    
    Ready to revolutionize e-commerce with AI! 🎯
  `);
}

bootstrap();
