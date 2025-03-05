import { Module } from "@nestjs/common";
import { BlogController } from "./blog.controller";
import { BLOG_SERVICE_TOKEN } from "./blog.interface";
import { BlogService } from "./blog.service";

@Module({
    imports: [],
    controllers: [BlogController],
    providers: [{
        provide: BLOG_SERVICE_TOKEN,
        useClass: BlogService
    }],
})
export class BlogModule { }