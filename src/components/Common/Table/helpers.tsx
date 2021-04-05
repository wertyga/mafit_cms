import React from 'react';
import { PaginationConfig } from 'antd/es/pagination';
import { ExpandableConfig } from 'rc-table/es/interface';
import { CloseCircleFilled, EditFilled } from '@ant-design/icons';

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
