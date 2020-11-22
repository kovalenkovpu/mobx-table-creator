import { action, makeObservable, observable } from 'mobx';

import postsModel, { Post } from 'src/models/posts-model';
import postsService from 'src/services/posts';

import { RootStore } from './root-store';
import { ITableStore, TableStore } from './table-store';

export interface IPostsTableStore extends ITableStore<Post> {
  post: Post | undefined;
  isPostLoading: boolean;
  loadingPostId: number;

  getPostDetailedInfo(postId: number): Promise<void>;
}

// Example of working with specific table entity store
// and store bindings
export class PostsStoreTable
  extends TableStore<Post>
  implements IPostsTableStore {
  private rootStore: RootStore;
  post: Post | undefined;
  isPostLoading = false;
  loadingPostId = -1;

  constructor(rootStore: RootStore) {
    super(postsService, postsModel);

    this.rootStore = rootStore;
    this.service = postsService;

    makeObservable(this, {
      isPostLoading: observable,
      post: observable,
      loadingPostId: observable,
      getPostDetailedInfo: action,
      resetPostDetailedInfo: action,
    });
  }

  getPostDetailedInfo = async (postId: number) => {
    this.isPostLoading = true;
    this.loadingPostId = postId;
    const denormalizedPost = await postsService.getPost(postId);

    this.isPostLoading = false;
    this.loadingPostId = -1;
    this.post = postsModel.normalizePost(denormalizedPost);
  };

  resetPostDetailedInfo = () => {
    this.post = undefined;
  };
}