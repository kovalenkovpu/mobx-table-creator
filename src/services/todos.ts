import { Todo } from "src/models/todo-model";

export interface QueryParams {
  userId?: number;
  id?: number;
}

interface IToDoService {
  baseURL: string;

  getData(params?: QueryParams): Promise<Todo[]>;
}

class ToDoService implements IToDoService {
  baseURL = 'https://jsonplaceholder.typicode.com/posts';

  getData = async (params?: QueryParams): Promise<Todo[]> => {
    const query = params ? new URLSearchParams(Object.entries(params)) : '';
    const response = await fetch(`${this.baseURL}?${query}`);

    // https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
    return response.json() as Promise<Todo[]>;
  }
}

export default new ToDoService();