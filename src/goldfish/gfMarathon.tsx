import { getCommonColumns } from 'components/Common/Table/helpers';

import { ColumnsCommonProps } from 'types/table';
import { getColumnSearchProps } from '../components/Common/Filter/helpers';

export const gfMarathon = {
  title: 'Marathon',
  columns: (columnProps: ColumnsCommonProps) => {
    const commonColumns = getCommonColumns(columnProps);
    return [
      ...commonColumns.slice(0, commonColumns.length - 1),
      {
        title: 'Start date',
        dataIndex: 'dateStart',
        key: 'dateStart',
        sorter: (a, b) => {
          const asc = new Date(a.dateStart).getTime() < new Date(b.dateStart).getTime();
          if (asc) return 1;
          if (!asc) return -1;
          return 0;
        },
        render: (date: string) => new Date(date).toLocaleDateString(),
        ...getColumnSearchProps({ name: 'dateStart', currentFilter: columnProps.filter.currentFilter }),
      },
      commonColumns[commonColumns.length - 1],
    ];
  },
};
