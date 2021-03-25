import React from 'react';
import { Layout } from 'antd';
import { SideMenu } from 'components/SideMenu/SideMenu';

const { Header, Content, Footer } = Layout;

export const AppLayout = ({ children }) => (
  <Layout>

    <SideMenu />
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  </Layout>
);
