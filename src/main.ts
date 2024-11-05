import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4200'], // Aqui agregamos nuestros dominios autorizados, en la mayoria de caso agregaremos nuestras rutas para guardar credenciales, login, etc...
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metodos aceptados
    allowedHeaders: ['Content-Type', 'Authorization'], // Los headers a utilizar, en este caso headers de autorización
    credentials: true, // Habilitamos el envio de credenciales
  });

  await app.listen(3000);
}

bootstrap();
