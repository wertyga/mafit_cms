import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import arrayMove from 'array-move';

import { Recipe } from 'types/recipes';

import { getDataWithIndexes, TABLE_ELEMENTS } from './helpers';

import './styles.css';

const { draggableColumn, SortableContainer, SortableItem } = TABLE_ELEMENTS;

type Props = {
  data: Record<string, string | number>[];
  columns: Recipe[];
};

export const SortableTable: React.FC<Partial<Props>> = (tableProps) => {
  const [dataSource, setDataSource] = useState(getDataWithIndexes(tableProps.data));

  const onSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter((el) => !!el);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = (dataSource || [])
      .findIndex(({ index: dataIndex }) => dataIndex === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  useEffect(() => {
    setDataSource(getDataWithIndexes(tableProps.data));
  }, [tableProps.data]);

  return (
    <Table
      {...tableProps}
      dataSource={dataSource}
      columns={[].concat(draggableColumn, tableProps.columns)}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
};
