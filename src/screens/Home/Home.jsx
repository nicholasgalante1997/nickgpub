import React from 'react';
import {
  Divider, Typography,
} from 'antd';
import './styles/Home.scss';
import HomeAnimation from './components/HomeAnimation';
import HomeTitle from './components/HomeTitle';
import HomeParagraph from './components/HomeParagraph';
import Layout from '../../components/common/Layout';

const {
  Paragraph,
} = Typography;

const left = () => (
  <>
    <HomeAnimation />
    <HomeTitle />
    <HomeParagraph />
  </>
);

const right = () => (
  <>
    <h1 className="home-text-soft">Action Container</h1>
    {' '}
    <Divider className="divider">
      <Paragraph className="divider-text">
        Decide what content goes here maybe itll just be a cool icon
      </Paragraph>
    </Divider>
  </>
);

const Home = () => (
  <Layout left={left} right={right} />
);

export default Home;
