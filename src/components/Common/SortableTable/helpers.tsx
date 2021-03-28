import React from 'react';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';

const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab' }} />);
export const TABLE_ELEMENTS = {
  SortableItem: sortableElement((props) => <tr {...props} />),
  SortableContainer: sortableContainer((props) => <tbody {...props} />),
  draggableColumn: {
    title: 'Sort',
    dataIndex: 'sort',
    align: 'center',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
};

export const getDataWithIndexes = (data: Record<string, string | number>[]) => (
  data.map((item, i) => ({ ...item, index: i }))
);
