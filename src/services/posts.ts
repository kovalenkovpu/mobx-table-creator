import { Post } from 'src/models/posts-model';

import { TableService } from './table-service';

export interface PostsQueryParams {
  userId?: number;
  id?: number;
}

interface IPostsService {
  getPost(postId: number): Promise<Post>;
}

class PostsService
  extends TableService<Post>
  implements IPostsService {
  // example of entity-specific service method 
  getPost = async (postId: number) => {
    const response = await fetch(`${this.baseURL}/${postId}`);

    return response.json() as Promise<Post>;
  };
}

export default new PostsService('https://jsonplaceholder.typicode.com/posts');