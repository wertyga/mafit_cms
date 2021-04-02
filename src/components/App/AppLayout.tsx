import React from 'react';
import { Layout } from 'antd';
import { SideMenu } from 'components/SideMenu/SideMenu';
import { Header } from './Header';

import './styles.css';

const { Content, Footer } = Layout;

export const AppLayout = ({ children }) => {
  return (
    <Layout>
      <SideMenu isOpen />
      <Layout style={{ marginLeft: 200, minHeight: '100vh' }}>
        <Header />
        <Content className="AppLayout__main">
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>MaFit Design ©2021</Footer>
      </Layout>

    </Layout>
  );
};
