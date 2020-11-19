import { TableModel } from "./table-model";

export interface Todo {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface ITodoModel {}

export class TodoModel
  extends TableModel<Todo>
  implements ITodoModel {}

export default new TodoModel();