import { ColumnType } from 'antd/lib/table/interface';
import React from 'react';

import { Post } from 'src/models/posts-model';

import PostDetailCell from './PostDetailCell';

interface CellMapper<DataItemType> {
  detailedInfo: ColumnType<Post>['render'];
  default: ColumnType<DataItemType>['render'];
}

export const getCellMapping = <DataItemType,>(): CellMapper<DataItemType> => ({
  detailedInfo: (
    value: any,
    record: Post,
    index: number,
  ) => (
      <PostDetailCell
        value={value}
        record={record}
        index={index}
      />),
  default: (value: any) => value,
});