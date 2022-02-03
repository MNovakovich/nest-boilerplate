import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import './sequelize-generator';
dotenv.config();

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe());
  //setup swagger
  const config = new DocumentBuilder()
    .setTitle('App Docs')
    .setDescription('The App description')
    .setVersion('1.0')
    .addTag('Food book')
    .build();
  app.setGlobalPrefix('/api/v1');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port=${PORT}`));
}
bootstrap();
