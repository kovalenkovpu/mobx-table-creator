import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStores } from 'src/hooks/useStores';
import { PetsTable } from 'src/components/PetsTable';

const PetsTableContainer: React.FC = observer(() => {
  const { isDataLoading, petStore } = useStores();

  return (
    <PetsTable
      getData={petStore.getData}
      data={petStore.data}
      isDataLoading={isDataLoading}
    />
  );
});

export default PetsTableContainer;