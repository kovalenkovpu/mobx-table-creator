export interface QueryParams {
  userId?: number;
  id?: number;
}

interface IToDoService {
  baseURL: string;

  getData(params?: QueryParams): Promise<any>;
}

class ToDoService implements IToDoService {
  baseURL = 'https://jsonplaceholder.typicode.com/posts';

  getData = (params?: QueryParams) => {
    const query = params ? new URLSearchParams(Object.entries(params)) : '';

    return fetch(`${this.baseURL}?${query}`);
  }
}

export default new ToDoService();