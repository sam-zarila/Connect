import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config =new DocumentBuilder()
  .setTitle('Farm-Connect Backend')
  .setDescription('Apis for handlind farmconnect backend')
  .setVersion('1.0')
  .build()

  const document =SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api',app, document)
  await app.listen(3000);
}
bootstrap();
