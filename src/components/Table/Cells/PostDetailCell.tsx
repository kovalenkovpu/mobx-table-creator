import { observer } from 'mobx-react-lite';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import React from 'react';

import { useStores } from 'src/hooks/useStores';
import { Post } from 'src/models/posts-model';

interface PostDetailCellProps {
  value: any;
  record: Post;
  index: number;
}

export const PostDetailCell = (props: PostDetailCellProps) => {
  const { postsStore } = useStores();
  const {
    getPostDetailedInfo,
    resetPostDetailedInfo,
    isPostLoading,
    loadingPostId,
    post,
  } = postsStore;

  return (
    <>
      <Modal
        visible={Boolean(post)}
        title={post && post.title}
        onCancel={resetPostDetailedInfo}
        onOk={resetPostDetailedInfo}
      >
        {post && post.body}
      </Modal>
      <Button
        loading={isPostLoading && props.record.id === loadingPostId}
        onClick={() => getPostDetailedInfo(props.record.id)}
        type="text"
      >
        Get post detailed info
      </Button>
    </>
  );
}

export default observer(PostDetailCell);