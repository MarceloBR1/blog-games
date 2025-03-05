export interface IBlogService {
    posts(): any;
    post(): any;
}

export const BLOG_SERVICE_TOKEN = Symbol('BLOG_SERVICE_TOKEN');