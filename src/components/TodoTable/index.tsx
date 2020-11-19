import Table from 'antd/lib/table';
import React from 'react';

import { ToDoStoreTable } from 'src/stores/todo-store';
import { RootStore } from 'src/stores/root-store';

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
export interface TodoTableProps {
  data: ToDoStoreTable['data'];
  isDataLoading: RootStore['isDataLoading'];
  getData: ToDoStoreTable['getData'];
}

export const TodoTable: React.FC<TodoTableProps> = ({
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