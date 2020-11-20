import { PostsStoreTable } from './posts-store';

export interface IRootStore {
  postsStore: PostsStoreTable;
}

export class RootStore {
  postsStore: PostsStoreTable;

  constructor() {
    this.postsStore = new PostsStoreTable(this);
  }
}

export default new RootStore();