import React from 'react';

import { Spin } from 'antd';

import './styles.css';

type Props = {
	isActive: boolean;
};

export const Loader: React.FC<Props> = ({ isActive }) => (
  isActive ? (
    <div className="loader">
      <Spin spinning size="large" />
    </div>
  ) : null
);
