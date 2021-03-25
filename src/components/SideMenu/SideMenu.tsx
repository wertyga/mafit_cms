import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import _findIndex from 'lodash/findIndex';
import { gfMenu } from 'goldfish/gfMenu';
import { Layout, Menu } from 'antd';

import './styles.css';

const { Sider } = Layout;

export const SideMenu = () => {
  const router = useRouter();

  const defaultMenuChosen = _findIndex(gfMenu, ({ href }) => href === router.pathname);
  return (
    <Sider className="tint-bg sideMenu">
      <Menu
        mode="inline"
        className="tint-bg"
        defaultSelectedKeys={[defaultMenuChosen.toString()]}
      >
        {gfMenu.map(({ title, href, Icon }) => (
          <Menu.Item key={title} icon={<Icon />}>
            <Link href={href}>{title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
