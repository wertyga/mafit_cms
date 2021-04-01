import React from 'react';
import { Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Text } = Typography;

type Props = {
	title: string;
	onClose: () => void;
};
export const ModalTitle: React.FC<Props> = ({ title, onClose }) => (
  <div className="fluid align-center">
    <ArrowLeftOutlined onClick={onClose} className="mr-4" />
    <Text strong>{ title }</Text>
  </div>
);
