import { Injectable } from "@nestjs/common";
import { IPostService } from "../../interfaces/post.interface";

@Injectable()
export class PostService implements IPostService {
    posts(): any {
        return 'Oi';
    }
    post(): any {
        return 'Tchau';
    }
}