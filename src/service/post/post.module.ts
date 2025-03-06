import { Module } from "@nestjs/common";
import { PostController } from "src/controller/post/post.controller";
import { POST_SERVICE_TOKEN } from "../../interfaces/post.interface";
import { PostService } from "src/service/post/post.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";
import { Author } from "src/entities/author.entity";
import { Post } from "src/entities/post.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category, Author, Post])],
    controllers: [PostController],
    providers: [{
        provide: POST_SERVICE_TOKEN,
        useClass: PostService
    }],
})
export class BlogModule { }