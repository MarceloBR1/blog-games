import { Controller, Get, Inject } from "@nestjs/common";
import { BLOG_SERVICE_TOKEN, IBlogService } from "./blog.interface";

@Controller()
export class BlogController {
    constructor(
        @Inject(BLOG_SERVICE_TOKEN)
        private readonly blogService: IBlogService
    ) {
        console.log('Sou um construtor do BlogController');
    }

    @Get('/v1/blog/posts')
    async posts() {
        return this.blogService.posts();
    } 
}