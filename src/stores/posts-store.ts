import postsModel, { Post } from 'src/models/posts-model';
import postsService from 'src/services/posts';

import { RootStore } from './root-store';
import { ITableStore, TableStore } from './table-store';

export interface IPostsTableStore extends ITableStore<Post> {}

export class PostsStoreTable
  extends TableStore<Post>
  implements IPostsTableStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    super(postsService, postsModel);

    this.rootStore = rootStore;
  }
}