import React from 'react';
import AntdTable, {
  TableProps as AntdTableProps,
  ColumnsType,
} from 'antd/lib/table';
import Button from 'antd/lib/button';

import { BaseTableDataItem } from 'src/models/table-model';

export interface TableProps<DataItemType> extends AntdTableProps<DataItemType> {
  onDelete?: (dataItem: DataItemType, index: number) => void;
}

export const Table = <DataItemType extends BaseTableDataItem>(
  props: TableProps<DataItemType>
)=> {
  const {
    columns: antdColumns = [],
    onDelete,
    ...rest
  } = props;

  const columns: ColumnsType<DataItemType> = React.useMemo(
    () => antdColumns.map(column => {
      if (onDelete && column.key === 'deleteAction') {
        return {
          ...column,
          render: (text: string, dataItem: DataItemType, index) => (
            <Button
              onClick={() => onDelete(dataItem, index)}
              type="text"
              danger
            >
              Delete
            </Button>
          ),
        };
      }

      return column;
    }),
    [antdColumns, onDelete],
  );

  return (
    <AntdTable<DataItemType>
      {...rest}
      columns={columns}
    />
  );
};