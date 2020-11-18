import Table from "antd/lib/table";
import React from "react";

import { STATUS_MAP } from "src/services/pets";
import { PetStoreTable } from "src/stores/petStore";
import { RootStore } from "src/stores/rootStore";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'photoUrls',
    dataIndex: 'photoUrls',
    key: 'photoUrls',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
];

// TODO: should be an elegant way to provide proper interface
export const PetsTable: React.FC<{
  data: PetStoreTable['data'];
  isDataLoading: RootStore['isDataLoading'];
  getData: PetStoreTable['getData'];
}> = ({ data, isDataLoading, getData }) => {
  React.useEffect(() => {
    getData({ status: STATUS_MAP.available });
  }, [getData]);

  return (
    <Table columns={columns} dataSource={data} loading={isDataLoading} />
  );
};