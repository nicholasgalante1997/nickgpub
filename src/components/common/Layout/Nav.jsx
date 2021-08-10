import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined, BookOutlined, UserOutlined, BulbOutlined,
} from '@ant-design/icons';
import './styles/Layout.scss';

const { SubMenu } = Menu;

const Nav = () => {
  const [current, setCurrent] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/anthologies':
        setCurrent('anthology');
        break;
      case '/about':
        setCurrent('about');
        break;
      case '/mantras':
        setCurrent('mantras');
        break;
      case '/developer':
        setCurrent('developer');
        break;
      case '/contribution':
        setCurrent('contribution');
        break;
      default:
        setCurrent('home');
    }
  }, [location]);

  return (
    <Menu
      selectedKeys={[current]}
      mode="horizontal"
      className="layout-nav"
    >
      <Menu.Item key="logo">
        <h1 className="layout-nav-title">
          Vantage Writ
        </h1>
      </Menu.Item>
      <Menu.Item key="home" icon={<HomeOutlined />} className="layout-nav-link">
        <NavLink to="/" className="layout-nav-link">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="anthology" icon={<BookOutlined />} className="layout-nav-link">
        <NavLink to="/anthologies" className="layout-nav-link">Anthology</NavLink>
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<BulbOutlined />} title="Considerations" className="layout-nav-link">
        <Menu.ItemGroup title="Absurd">
          <Menu.Item key="about">
            <NavLink to="/about" className="layout-nav-link">About</NavLink>
          </Menu.Item>
          <Menu.Item key="mantras">
            <NavLink to="/mantras" className="layout-nav-link">Mantras</NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Methodical">
          <Menu.Item key="developer">
            <NavLink to="/developer" className="layout-nav-link">For Developers</NavLink>
          </Menu.Item>
          <Menu.Item key="contribution">
            <NavLink to="/contribution" className="layout-nav-link">To Contribute</NavLink>
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="admin" icon={<UserOutlined />} disabled className="layout-nav-author">
        Author
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
