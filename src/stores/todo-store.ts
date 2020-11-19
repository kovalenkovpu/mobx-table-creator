import { makeAutoObservable } from 'mobx';

import todoService, { QueryParams } from 'src/services/todos';

import { RootStore } from './root-store';

export interface IToDoStoreTable {
  data: [];

  getData(params?: QueryParams): void;
}

export class ToDoStoreTable implements IToDoStoreTable {
  private rootStore: RootStore;

  data: [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
  }

  getData = async (params?: QueryParams) => {
    // example of communication between stores
    this.rootStore.isDataLoading = true;

    const denormalizedData = await todoService.getData(params);
    this.data = await denormalizedData.json();

    this.rootStore.isDataLoading = false;
  };
}