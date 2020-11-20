import { TableModel } from "./table-model";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IPostsModel {}

export class PostsModel
  extends TableModel<Post>
  implements IPostsModel {}

export default new PostsModel();