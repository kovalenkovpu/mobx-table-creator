import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from 'src/hooks/useStores';
import { PostsTable } from 'src/components/PostsTable';

const PostsTableContainer: React.FC = () => {
  const { postsStore } = useStores();
  const {
    getData,
    onDelete,
    data,
    isDataLoading,
  } = postsStore;

  return (
    <PostsTable
      getData={getData}
      onDelete={onDelete}
      data={data}
      isDataLoading={isDataLoading}
    />
  );
};

export default observer(PostsTableContainer);