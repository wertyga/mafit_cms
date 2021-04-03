import React from 'react';
import { Typography } from 'antd';
import { CloseCircleFilled, EditOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const gfHumans = {
  title: 'Human categories',
  columns: ({ onEdit, onDelete }) => ([
	  {
	  	title: 'Category',
	  	key: 'category',
      dataIndex: 'category',
      render: (_, record) => <Text key="category">{record.category}</Text>,
	  },
    {
      title: null,
      dataIndex: 'delete',
	    key: 'delete',
      align: 'right',
      render: (_, record) => (
        <div className="flex-column align-end" key="delete">
          <EditOutlined className="success icon-md pointer mb-2" onClick={onEdit(record.id)} />
          <CloseCircleFilled className="danger icon-md pointer" onClick={onDelete(record.id)} />
        </div>
      ),
    },
  ]),
};
