import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from 'src/hooks/useStores';
import { TodoTable } from 'src/components/TodoTable';

const TodoTableContainer: React.FC = () => {
  const { todoStore } = useStores();
  const {
    getData,
    data,
    isDataLoading,
  } = todoStore;

  return (
    <TodoTable
      getData={getData}
      data={data}
      isDataLoading={isDataLoading}
    />
  );
};

export default observer(TodoTableContainer);