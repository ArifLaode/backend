import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Mengizinkan hanya dari origin ini
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Mengizinkan metode HTTP tertentu
    credentials: true, // Mengizinkan pengiriman cookie
  });
  await app.listen(3001);
}
bootstrap();
