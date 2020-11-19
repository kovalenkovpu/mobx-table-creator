import { makeAutoObservable } from 'mobx';
import todoModel from 'src/models/todo-model';

import todoService from 'src/services/todos';

import { RootStore } from './root-store';
import { ITableStore, TableStore } from './table-store';

export interface ITodoTableStore extends ITableStore {
  rootStore: RootStore;
}

// export class ToDoStoreTable implements IToDoStoreTable {
//   private rootStore: RootStore;
//
//   data: [];
//
//   constructor(rootStore: RootStore) {
//     makeAutoObservable(this);
//
//     this.rootStore = rootStore;
//   }
//
//   getData = async (params?: QueryParams) => {
//     // example of communication between stores
//     this.rootStore.isDataLoading = true;
//
//     const denormalizedData = await todoService.getData(params);
//     this.data = await denormalizedData.json();
//
//     this.rootStore.isDataLoading = false;
//   };
// }

export class ToDoStoreTable
  extends TableStore
  implements ITodoTableStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    super(todoService, todoModel);

    this.rootStore = rootStore;

    makeAutoObservable(this);
  }
}