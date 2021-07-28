import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
        <Link to="/" className="layout-nav-link">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="anthology" icon={<BookOutlined />} className="layout-nav-link">
        <Link to="/anthologies" className="layout-nav-link">Anthology</Link>
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<BulbOutlined />} title="Considerations" className="layout-nav-link">
        <Menu.ItemGroup title="Absurd">
          <Menu.Item key="about">
            <Link to="/about" className="layout-nav-link">About</Link>
          </Menu.Item>
          <Menu.Item key="mantras">
            <Link to="/mantras" className="layout-nav-link">Mantras</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Methodical">
          <Menu.Item key="developer">
            <Link to="/developer" className="layout-nav-link">For Developers</Link>
          </Menu.Item>
          <Menu.Item key="contribution">
            <Link to="/contribution" className="layout-nav-link">To Contribute</Link>
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
