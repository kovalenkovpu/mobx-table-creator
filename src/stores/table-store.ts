import { QueryParams } from '../services/todos';
import { makeAutoObservable } from 'mobx';

export interface ITableStore {
  service: any;
  model: any;

  data: any[];
  isDataLoading: boolean;

  getData(params?: QueryParams): void;
}

export class TableStore implements ITableStore {
  isDataLoading = false;
  data: [];
  service: any;
  model: any;

  constructor(service: any, model: any) {
    this.service = service;
    this.model = model;

    makeAutoObservable(this);
  }

  getData = async (params?: QueryParams) => {
    // example of communication between stores
    this.isDataLoading = true;

    const denormalizedData = await this.service.getData(params);

    this.data = await this.model.normalizeData(denormalizedData);

    this.isDataLoading = false;
  };
}