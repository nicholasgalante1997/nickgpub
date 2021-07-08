import React from 'react';
import { Row, Col } from 'antd';
import './styles/Home.scss';

const Home = () => (
  <Row className="home-container">
    <Col span={12} className="home-col">
      <h1 className="home-text">Welcome to React</h1>
    </Col>
    <Col span={12} className="home-col-right">
      <h1 className="home-text">Action Container</h1>
    </Col>
  </Row>
);

export default Home;
