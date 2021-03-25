import React from 'react';
import { Layout } from 'antd';

const {
  Header, Sider, Footer, Content,
} = Layout;

export const AppLayout = ({ children }) => (
  <Layout>
    <Sider>Sider</Sider>
    <Layout>
      <Header>Header</Header>
      <Content>
        {children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);
