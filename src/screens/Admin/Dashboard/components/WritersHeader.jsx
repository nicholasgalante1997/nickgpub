import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import WritersLogo from './WritersLogo';

const { Header } = Layout;
const { SubMenu } = Menu;

const WritersHeader = () => {
  const params = useParams();
  const { username } = params;
  return (
    <Header className="header" theme="dark">
      <div className="header-body-left">
        <WritersLogo />
        <h2 className="header-title">
          Vantage Write
        </h2>
      </div>
      <div className="header-body-right">
        <Menu mode="horizontal" theme="dark">
          <SubMenu key="account-utils" icon={<UserOutlined />} title={username}>
            <Menu.ItemGroup title="Account">
              <Menu.Item key="upgrade">Upgrade to Premium</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

export default WritersHeader;
