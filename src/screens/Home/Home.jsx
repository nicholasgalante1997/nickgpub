import React from 'react';
import { Divider } from 'antd';
import HomeAnimation from './components/HomeAnimation';
import HomeTitle from './components/HomeTitle';
import HomeParagraph from './components/HomeParagraph';
import FeatureTitle from './components/FeatureTitle';
import Layout from '../../components/common/Layout';
import Article from '../../components/common/Article';
import './styles/Home.scss';

const left = () => (
  <>
    <div className="title-block">
      <HomeTitle />
      <Divider />
      <HomeAnimation />
      <HomeParagraph />
    </div>
  </>
);

const right = () => (
  <>
    <FeatureTitle />
    <Article />
  </>
);

const Home = () => (
  <Layout left={left} right={right} />
);

export default Home;
