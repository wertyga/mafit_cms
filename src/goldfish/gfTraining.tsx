import React from 'react';
import _noop from 'lodash/noop';
import { DayFood } from 'graphql/types';
import { Typography } from 'antd';

import { Video } from 'components/Common/Video/Video';
import { getColumnSearchProps } from 'components/Common/Filter/helpers';
import { getDeleteEditColumn } from 'components/Common/Table/helpers';

const { Text } = Typography;

export const gfTraining = {
  title: 'Training',
  columns: ({ filter: { currentFilter }, onEdit = _noop, onDelete = _noop }) => {
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
      {
        title: 'Day food',
        dataIndex: 'dayFood',
        key: 'dayFood',
        responsive: ['lg'],
        render: (dayFood: DayFood) => <Text>{(dayFood || {}).title}</Text>,
        sorter: (a, b) => {
          const asc = a.title.toLowerCase() < b.title.toLowerCase();
          if (asc) return 1;
          if (!asc) return -1;
          return 0;
        },
        ...getColumnSearchProps({ name: 'dayFood', currentFilter }),
      },
      {
        title: 'Video',
        dataIndex: 'video',
        key: 'video',
        align: 'center',
        render: (url: string) => (url ? <Video className="image-table" src={url} /> : null),
      },
      deleteEditColumn,
    ];
  },
};
