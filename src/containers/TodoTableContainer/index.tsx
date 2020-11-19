import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from 'src/hooks/useStores';
import { TodoTable } from 'src/components/TodoTable';

const TodoTableContainer: React.FC = () => {
  const { isDataLoading, todoStore } = useStores();

  return (
    <TodoTable
      getData={todoStore.getData}
      data={todoStore.data}
      isDataLoading={isDataLoading}
    />
  );
};

export default observer(TodoTableContainer);