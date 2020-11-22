export interface TableQueryParams {
  [key: string]: any;
}

interface ITableService<DataItemType> {
  baseURL: string;

  getData(params?: TableQueryParams): Promise<DataItemType[]>;
}

export class TableService<DataItemType> implements ITableService<DataItemType> {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  getData = async (params?: TableQueryParams): Promise<DataItemType[]> => {
    const query = params ? new URLSearchParams(Object.entries(params)) : '';
    const response = await fetch(`${this.baseURL}?${query}`);

    // https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
    return response.json() as Promise<DataItemType[]>;
  }
}