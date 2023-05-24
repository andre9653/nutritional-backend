import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const APP_TITLE = 'NestJS API Boilerplate';
const APP_DESCRIPTION = 'NestJS API Boilerplate Description';
const APP_VERSION = '1.0';
const APP_TAG = 'cats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(APP_TITLE)
    .setDescription(APP_DESCRIPTION)
    .setVersion(APP_VERSION)
    .addTag(APP_TAG)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.SERVER_PORT || 3000).then(() => {
    console.log(`Server running on port ${process.env.SERVER_PORT || 3000}`);
  });
}
bootstrap();
