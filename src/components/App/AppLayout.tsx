import React from 'react';
import { Layout, Typography } from 'antd';
import { SideMenu } from 'components/SideMenu/SideMenu';

const { Text } = Typography;

import './styles.css';

const { Header, Content, Footer } = Layout;

export const AppLayout = ({ children }) => {
  return (
    <Layout>
      <SideMenu isOpen />
      <Layout style={{ marginLeft: 200, minHeight: '100vh' }}>
        <Header className="AppLayout__header">
          <Text className="light font-big">Mafit admin</Text>
        </Header>
        <Content className="AppLayout__main">
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>MaFit Design ©2021</Footer>
      </Layout>

    </Layout>
  );
};
