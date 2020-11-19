import { makeAutoObservable } from 'mobx';

import { ToDoStoreTable } from './todo-store';

export class RootStore {
  isDataLoading = false;
  todoStore: ToDoStoreTable;

  constructor() {
    makeAutoObservable(this);

    this.todoStore = new ToDoStoreTable(this);
  }
}

export default new RootStore();