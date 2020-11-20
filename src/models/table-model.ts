export interface BaseTableDataItem {
  id: number;
}

export type NormalizedDataItemType<DataItemType extends BaseTableDataItem> = DataItemType & {
  key: string;
}

export interface ITableModel<DataItemType extends BaseTableDataItem> {
  normalizeData(
    denormalizedData: DataItemType[],
  ): NormalizedDataItemType<DataItemType>[];
}

export class TableModel<DataItemType extends BaseTableDataItem>
  implements ITableModel<DataItemType> {
  normalizeData = (
    denormalizedData: DataItemType[],
  ): NormalizedDataItemType<DataItemType>[] => denormalizedData.map(dataItem => ({
    ...dataItem,
    key: String(dataItem.id),
  }));
}
