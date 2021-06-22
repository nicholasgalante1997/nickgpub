import React, { useContext, useEffect } from 'react';
// import { useLocation, useHistory } from 'react-router';

import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { UserContext } from '../../contexts/User';

import './scss/AdminMenu.scss';

const { SubMenu } = Menu;

const AdminMenu = () => {
  const [userContext, setUserContext] = useContext(UserContext);

  return (
    <Menu mode="horizontal" className="admin-menu" theme="dark" title="Admin">
      <SubMenu key="action-menu" title="Admin Options" icon={<SettingOutlined />} theme="dark">
        <Menu.ItemGroup title="login">
          <Menu.Item key="login" />
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default AdminMenu;
