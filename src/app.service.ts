import { Injectable } from '@nestjs/common';

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// DEFINICION DE METODOS QUE SE INYECTARAN AL CONTROLADOR
@Injectable()
export class AppService {
  // Defino un array donde se almacenarán los Posts
  private posts: Post[] = [];
  // Devuelve todos los post almacenados
  findAll() {
    return this.posts;
  }
  // Buca un post por id
  findOne(id: string) {
    return this.posts.find(post => post.id === id);
  }
  // Crea un nuevo post
  create(post: any) {
    const newPost: Post = {
      // Se va añadiendo al id un valor cada vez que recibamos un nuevo post.
      id: (this.posts.length + 1).toString(),
      title: post.title,
      content: post.content,
      author: post.author,
      createdAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }
  // Actualiza post existente
  update(id: string, updatedPost: any) {
    // Busca si el id dado por el parámetro de entrada coincide con el del post evaluado
    const index = this.posts.findIndex(post => post.id === id);
    // Si no encuentras ningun index entonces devuelve un null
    if (index === -1) return null;

    const currentPost = this.posts[index];

    this.posts[index] = {
    id: currentPost.id, //Conservamos el ID original
    title: updatedPost.title || currentPost.title, // Actualizamos si existe en uptadedPost
    content: updatedPost.content || currentPost.content,
    author: updatedPost.author || currentPost.author,
    createdAt: currentPost.createdAt, // Conservamos la fecha de creación original

    }
  }

  // Elimina el post por su ID
  remove(id: string) {
    // Busca el indice del post con el id dado
    const index = this.posts.findIndex(post => post.id === id);
    // Si no encuentra el post devuelve null
    if (index === -1) return null;
    // Si lo encuentra lo elimina del array y devuelve el post eliminado
    return this.posts.splice(index, 1);
  }
    
  
}
