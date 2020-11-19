export interface ITodoModel {
  normalizeData(denormalizedData: Response): Promise<any[]>;
}

export class TodoModel implements ITodoModel {
  normalizeData = async (
    denormalizedData: Response,
  ) => {
    const data = await denormalizedData.json();

    // @ts-ignore
    return data.map(dataItem => ({ ...dataItem, normalized: true }));
  }
}

export default new TodoModel();