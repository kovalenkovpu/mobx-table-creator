import todoModel, { Todo } from 'src/models/todo-model';
import todoService from 'src/services/todos';

import { RootStore } from './root-store';
import { ITableStore, TableStore } from './table-store';

export interface ITodoTableStore extends ITableStore<Todo> {}

export class ToDoStoreTable
  extends TableStore<Todo>
  implements ITodoTableStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    super(todoService, todoModel);

    this.rootStore = rootStore;
  }
}