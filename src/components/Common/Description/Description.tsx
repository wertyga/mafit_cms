import React from 'react';
import classnames from 'classnames';
import { Row, Col, Typography } from 'antd';

import './styles.css';

const { Text } = Typography;

type Props = {
  className?: string | Record<string, boolean>;
  label: string;
  light?: boolean;
};

export const Description: React.FC<Props> = ({
  className, label, children, light,
}) => (
  <Row className={classnames('description', className)}>
    <Col span={3} className={classnames('row-col-title', { light })}>
      <Text strong>{label}</Text>
    </Col>
    <Col span={21} className="pl-4">{children}</Col>
  </Row>
);
