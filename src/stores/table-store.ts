import { action, makeObservable, observable } from 'mobx';

import { BaseTableDataItem, TableModel } from 'src/models/table-model';
import { TableService, TableQueryParams } from 'src/services/table-service';

export interface ITableStore<DataItemType extends BaseTableDataItem> {
  service: TableService<DataItemType>;
  model: TableModel<DataItemType>;

  data: DataItemType[];
  isDataLoading: boolean;

  getData(params?: TableQueryParams): Promise<void>;
  onDelete(dataItem: DataItemType, index: number): void;
}

export class TableStore<DataItemType extends BaseTableDataItem>
  implements ITableStore<DataItemType> {
  service: TableService<DataItemType>;
  model: TableModel<DataItemType>;

  data: DataItemType[];
  isDataLoading = false;

  constructor(service: TableService<DataItemType>, model: TableModel<DataItemType>) {
    makeObservable(this, {
      isDataLoading: observable,
      data: observable,
      getData: action,
    });

    this.service = service;
    this.model = model;
  }

  getData = async (params?: TableQueryParams) => {
    this.isDataLoading = true;

    const denormalizedData = await this.service.getData(params);

    this.data = this.model.normalizeData(denormalizedData);

    this.isDataLoading = false;
  };

  onDelete = (dataItem: DataItemType, index: number) => {
    this.data = this.data
      .filter((_, itemIndex) => itemIndex !== index);
  };
}