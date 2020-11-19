import { action, makeObservable, observable } from 'mobx';

import { QueryParams } from 'src/services/todos';
import { TableModel } from 'src/models/table-model';

export interface ITableStore<DataItemType> {
  data: DataItemType[];
  isDataLoading: boolean;

  getData(params?: QueryParams): Promise<void>;
}

export class TableStore<DataItemType> implements ITableStore<DataItemType> {
  private service: any;
  private model: TableModel<DataItemType>;

  data: DataItemType[];
  isDataLoading = false;

  constructor(service: any, model: TableModel<DataItemType>) {
    makeObservable(this, {
      isDataLoading: observable,
      data: observable,
      getData: action,
    })

    this.service = service;
    this.model = model;
  }

  getData = async (params?: QueryParams) => {
    this.isDataLoading = true;

    const denormalizedData = await this.service.getData(params);

    this.data = this.model.normalizeData(denormalizedData);

    this.isDataLoading = false;
  };
}