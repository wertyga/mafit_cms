import React from 'react';
import { Table, Typography, Row } from 'antd';

import './styles.css';

const { Title } = Typography;

export const ContentTable = ({ columns, data, title }) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="contentTable">
      <Row justify="start">
        <Title className="contentTable__title" level={2}>{title}</Title>
      </Row>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};
