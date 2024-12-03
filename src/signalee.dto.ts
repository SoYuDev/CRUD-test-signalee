// Hay que instalar class-validator y class-transformer ( npm install class-validator class-transformer )
import { IsString } from 'class-validator';

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsString()
    author: string;
}

export class UpdatePostDto {
    @IsString()
    title?: string;

    @IsString()
    content?: string;
}
