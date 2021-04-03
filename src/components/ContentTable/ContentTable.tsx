import React from 'react';
import { useRouter } from 'next/router';
import {
  Typography, Row, Button, Table,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;

type Props = {
  title: string;
  ModalComponent?: React.ReactElement;
};

export const ContentTable: React.FC<Props> = ({
  title, ModalComponent, ...tableProps
}) => {
  const router = useRouter();
  const { search } = router.query;

  const handleRestSearch = () => {
    router.replace(router.pathname);
  };
  return (
    <div className="contentTable">
      <Row justify="start" className="mb-4 flex-column">
        <Title className="contentTable__title align-center flex" level={2}>
          <span>{title}</span>
          {ModalComponent}
        </Title>
        <Row className="flex">
          {search
          && (
            <Button type="primary" icon={<CloseOutlined />} onClick={handleRestSearch}>
              {search}
            </Button>
          )}
        </Row>
      </Row>
      <Table {...tableProps} />
    </div>
  );
};
