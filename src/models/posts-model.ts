import { TableModel } from "./table-model";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IPostsModel {
  normalizePost(post: Post): Post;
}

export class PostsModel
  extends TableModel<Post>
  implements IPostsModel {
  // example of entity-specific model method  
  normalizePost = (post: Post) => post;
}

export default new PostsModel();