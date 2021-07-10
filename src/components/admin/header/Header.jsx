import React from 'react';
import { Layout } from 'antd';

import Logo from './Logo';

const CustomHeader = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <Logo />
    </Header>
  );
};

export default CustomHeader;
