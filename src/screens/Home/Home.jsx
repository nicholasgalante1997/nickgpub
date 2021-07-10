import React from 'react';
import {
  Row, Col, Divider, Typography,
} from 'antd';
import './styles/Home.scss';
import HomeAnimation from './components/HomeAnimation';
import HomeTitle from './components/HomeTitle';
import HomeParagraph from './components/HomeParagraph';
import Carousel from '../../components/common/carousel/Carousel';

const {
  Paragraph,
} = Typography;

const Home = () => (
  <Row className="home-container">
    <Col span={12} className="home-col">
      <HomeAnimation />
      <HomeTitle />
      <HomeParagraph />
    </Col>
    <Col span={12} className="home-col-right">
      <h1 className="home-text-soft">Action Container</h1>
      {' '}
      <Divider className="divider">
        <Paragraph className="divider-text">
          Decide what content goes here maybe itll just be a cool icon
        </Paragraph>
        <Carousel />
      </Divider>
    </Col>
  </Row>
);

export default Home;
