export interface IPostService {
    posts(): any;
    post(): any;
}

export const POST_SERVICE_TOKEN = Symbol('POST_SERVICE_TOKEN');