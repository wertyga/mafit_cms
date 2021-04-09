import React from 'react';
import _noop from 'lodash/noop';
import { PaginationConfig } from 'antd/es/pagination';
import { ExpandableConfig } from 'rc-table/es/interface';
import { CloseCircleFilled, EditFilled } from '@ant-design/icons';

import { ColumnsCommonProps } from 'types/table';

import { getColumnSearchProps } from '../Filter/helpers';

export const DEFAULT_PAGE_SIZE = 10;

export const getTableData = (config: {
  pagination?: Partial<PaginationConfig>,
  expandable?: Partial<ExpandableConfig<any>>,
}) => (
  {
    expandable: config.expandable,
    pagination: {
      defaultPageSize: DEFAULT_PAGE_SIZE,
      showSizeChanger: true,
      ...config.pagination,
    },
  }
);

type DeleteEditColumnProps = {
  onEdit: (id: string) => () => void;
  onDelete: (id: string) => () => void;
  align?: 'center' | 'left' | 'right';
};
export const getDeleteEditColumn = ({ onEdit, onDelete, align = 'center' }: DeleteEditColumnProps) => {
  let alignClass = '';
  if (align === 'center') alignClass = 'align-center';
  if (align === 'left') alignClass = 'align-start';
  if (align === 'right') alignClass = 'align-end';
  return {
    title: null,
    dataIndex: 'delete',
    align: 'center',
    render: (_, record) => (
      <div className={`flex-column ${alignClass} justify-center`}>
        <EditFilled className="success icon-md pointer mb-2" onClick={onEdit(record.id)} />
        <CloseCircleFilled className="danger icon-md pointer" onClick={onDelete(record.id)} />
      </div>
    ),
  };
};

export const getPaginationTableProp = (
  totalCount: number,
  title: string,
  onChange: (p: number, sz: number) => void,
) => ({
  pagination: {
    total: totalCount,
    showTotal: (total) => `Total ${total} ${title}`,
    onChange,
  }
});

export const getCommonTableData = ({
  totalCount, handleChangePage, paginationTitle,
}) => getTableData({
  ...getPaginationTableProp(totalCount, paginationTitle, handleChangePage),
});

export const getCommonColumns = ({
  filter: { currentFilter },
  onEdit = _noop,
  onDelete = _noop,
}: ColumnsCommonProps) => {
  const deleteEditColumn = getDeleteEditColumn({ onEdit, onDelete });
  return [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => {
        const asc = a.title.toLowerCase() < b.title.toLowerCase();
        if (asc) return 1;
        if (!asc) return -1;
        return 0;
      },
      ...getColumnSearchProps({ name: 'title', currentFilter }),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => {
        const asc = a.description.toLowerCase() < b.description.toLowerCase();
        if (asc) return 1;
        if (!asc) return -1;
        return 0;
      },
      ...getColumnSearchProps({ name: 'description', currentFilter }),
    },
    deleteEditColumn,
  ];
};
