import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

  // Todas las rutas de los endpoints van a empezar con signalee pj: localhost:3000/signalee/1 siendo 1 el id del post
@Controller('signalee')
export class AppController {
  // Inyecta nuestro appService al controlador
  constructor(private readonly appService: AppService) {}

  @Get()
  // Trae todos los posts del foro, llamando al método appService.findAll() donde se recuperan todos los posts.
  getAllPosts() {
    return this.appService.findAll();
  }

  // Trae un post mediante un id específico
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  // Añade un nuevo post al foro
  @Post()
  createPost(@Body() createPostDto: any) {
    return this.appService.create(createPostDto);
  }

  // Updatea un post existente
  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: any) {
    return this.appService.update(id, updatePostDto);
  }

  // Borra un post existente.
  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
