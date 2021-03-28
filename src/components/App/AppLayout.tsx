import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import { SideMenu } from 'components/SideMenu/SideMenu';

import './styles.css';

const { Header, Content, Footer } = Layout;

export const AppLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(true);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <Layout>
      <SideMenu isOpen />
      <Layout style={{ marginLeft: 200 }}>
        <Header className="AppLayout__header">
          <Button
            type="link"
            icon={<UnorderedListOutlined className="AppLayout__menu-icon" />}
            onClick={toggleOpen}
          />
        </Header>
        <Content className="AppLayout__main">
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    </Layout>
  );
};
