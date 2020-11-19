import Table from 'antd/lib/table';
import React from 'react';

import { ITodoTableStore } from 'src/stores/todo-store';

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
];

// TODO: should be an elegant way to provide proper interface
export const TodoTable: React.FC<ITodoTableStore> = ({
  data,
  isDataLoading,
  getData,
}) => {
  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isDataLoading}
    />
  );
};