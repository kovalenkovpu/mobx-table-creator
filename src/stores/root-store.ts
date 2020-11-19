import { ToDoStoreTable } from './todo-store';

export class RootStore {
  todoStore: ToDoStoreTable;

  constructor() {
    this.todoStore = new ToDoStoreTable(this);
  }
}

export default new RootStore();