import React from 'react';
import { useRouter } from 'next/router';
import { constructUrl } from 'w-querify';
import {
  Typography, Row, Button, Table,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface Props {
  title: string;
  preTableSlot?: React.ReactElement;
  ModalComponent?: React.ReactElement;
}

export const ContentTable = <DataType extends React.FC<Props>>({
  title, ModalComponent, preTableSlot, ...tableProps
}) => {
  const router = useRouter();
  const { search } = router.query;

  const handleResetSearch = () => {
    const { query: { search: searchQuery, by, ...rest } } = router;
    const resetUrl = constructUrl(router.pathname, rest);
    router.replace(resetUrl);
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
            <Button type="primary" icon={<CloseOutlined />} onClick={handleResetSearch}>
              {search}
            </Button>
          )}
        </Row>
      </Row>
      {preTableSlot}
      <Table<DataType> {...tableProps} />
    </div>
  );
};
