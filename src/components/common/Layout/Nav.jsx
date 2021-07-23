import React, { useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined, BookOutlined, UserOutlined, BulbOutlined,
} from '@ant-design/icons';
import './styles/Layout.scss';

const { SubMenu } = Menu;

const Nav = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="layout-nav"
    >
      <Menu.Item key="logo">
        <h1 className="layout-nav-title">
          Vantage Writ
        </h1>
      </Menu.Item>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="anthology" icon={<BookOutlined />}>
        Anthology
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<BulbOutlined />} title="Considerations">
        <Menu.ItemGroup title="Absurd" className="layout-text">
          <Menu.Item key="About" className="layout-text">About</Menu.Item>
          <Menu.Item key="Mantras" className="layout-text">Mantras</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Methodical" className="layout-text">
          <Menu.Item key="For Developers" className="layout-text">For Developers</Menu.Item>
          <Menu.Item key="Contributing" className="layout-text">To Contribute</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="admin" icon={<UserOutlined />} disabled className="layout-nav-author">
        Author
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
