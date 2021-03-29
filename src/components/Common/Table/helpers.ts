import { PaginationConfig } from 'antd/es/pagination';
import { ExpandableConfig } from 'rc-table/es/interface';

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
