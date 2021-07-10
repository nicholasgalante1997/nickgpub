import React from 'react';
import { Typography } from 'antd';
import './scss/Logo.scss';

const { Title } = Typography;

const Logo = () => (
  <div className="logo">
    <Title
      level={4}
      className="title"
      style={{ color: 'white' }}
      underline
    >
      Pub Dashboard
    </Title>
  </div>
);

export default Logo;
