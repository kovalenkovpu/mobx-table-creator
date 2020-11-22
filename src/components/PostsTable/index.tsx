import React from 'react';

import { IPostsTableStore } from 'src/stores/posts-store';
import { Post } from 'src/models/posts-model';
import { Table } from 'src/components/Table';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'body',
    key: 'body',
  },
  {
    title: 'User',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: 'Action',
    dataIndex: 'deleteAction',
    key: 'deleteAction',
  },
  {
    title: 'Get post detailed info',
    dataIndex: 'detailedInfo',
    key: 'detailedInfo',
  },
];

interface PostsTableProps extends Pick<
  IPostsTableStore,
  'data'
  | 'isDataLoading'
  | 'getData'
  | 'onDelete'
  > { };

export const PostsTable: React.FC<PostsTableProps> = ({
  data,
  isDataLoading,
  getData,
  onDelete,
}) => {
  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Table<Post>
      columns={columns}
      dataSource={data}
      loading={isDataLoading}
      onDelete={onDelete}
    />
  );
};