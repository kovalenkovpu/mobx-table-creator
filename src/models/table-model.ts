export interface NormalizedDataItemType {
  [key: string]: any;
  normalized: boolean;
}

export interface ITableModel<DataItemType> {
  normalizeData(
    denormalizedData: DataItemType[],
  ): NormalizedDataItemType[];
}

export class TableModel<DataItemType>
  implements ITableModel<DataItemType> {
  normalizeData = (
    denormalizedData: DataItemType[],
  ) => denormalizedData.map(dataItem => ({
    ...dataItem,
    normalized: true,
  }));
}
