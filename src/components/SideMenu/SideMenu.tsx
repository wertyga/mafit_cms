import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gfMenu } from 'goldfish/gfMenu';
import { Layout, Menu } from 'antd';

import { getDefaultMenuChosen } from './helpers';

import './styles.css';

const { Sider } = Layout;

type Props = {
  isOpen?: boolean;
};

export const SideMenu: React.FC<Props> = ({ isOpen }) => {
  const router = useRouter();

  const defaultMenuChosen = getDefaultMenuChosen(router.pathname);
  return (
    <Sider className="tint-bg sideMenu" collapsed={!isOpen}>
      <Menu
        mode="inline"
        className="tint-bg"
        defaultSelectedKeys={[defaultMenuChosen]}
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
