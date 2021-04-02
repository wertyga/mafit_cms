import React from 'react';
import { Layout, Typography } from 'antd';

import { UserMenu } from 'components/User/UserMenu/UserMenu';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export const Header = () => (
  <AntHeader className="flex pa-4 align-center justify-between">
    <Text className="light font-big">Mafit admin</Text>
    <UserMenu />
  </AntHeader>
);
