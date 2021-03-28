import React from 'react';
import { Typography, Row } from 'antd';
import { SortableTable } from 'components/Common/SortableTable/SortableTable';

const { Title } = Typography;

type Props = {
  title: string;
  TitleComponent?: React.ReactElement;
};

export const ContentTable: React.FC<Props> = ({
  title, TitleComponent, children, ...tableProps
}) => (
  <div className="contentTable">
    <Row justify="start" className="mb-4 flex-column">
      <Title className="contentTable__title align-center" level={2}>
        <span>{title}</span>
        {TitleComponent}
      </Title>
      {children}
    </Row>
    <SortableTable
      {...tableProps}
    />
  </div>
);
