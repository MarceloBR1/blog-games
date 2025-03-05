import { Injectable } from "@nestjs/common";
import { IBlogService } from "./blog.interface";

@Injectable()
export class BlogService implements IBlogService {
    posts(): any {
        return 'Oi';
    }
    post(): any {
        return 'Tchau';
    }
}