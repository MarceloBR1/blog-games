import { Controller, Get, Inject } from "@nestjs/common";
import { POST_SERVICE_TOKEN, IPostService } from "src/interfaces/post.interface";

@Controller()
export class PostController {
    constructor(
        @Inject(POST_SERVICE_TOKEN)
        private readonly postService: IPostService
    ) {
        console.log('Sou um construtor do BlogController');
    }

    @Get('/v1/blog/posts')
    async posts() {
        return this.postService.posts();
    } 
}