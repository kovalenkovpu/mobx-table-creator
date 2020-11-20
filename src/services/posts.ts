import { Post } from 'src/models/posts-model';

import { TableService } from './table-service';

export interface PostsQueryParams {
  userId?: number;
  id?: number;
}

interface IPostsService {}

class PostsService
  extends TableService<Post>
  implements IPostsService {}

export default new PostsService('https://jsonplaceholder.typicode.com/posts');