import React from 'react';
import classnames from 'classnames';
import { Row, Col, Typography } from 'antd';

const { Text } = Typography;

type Props = {
	className?: string | Record<string, boolean>;
	label: string;
};

export const Description: React.FC<Props> = ({ className, label, children }) => (
  <Row className={classnames(className)}>
    <Col span={3} className="row-col-title">
	    <Text strong>{label}</Text>
    </Col>
    <Col span={21} className="pl-4">{children}</Col>
  </Row>
);
