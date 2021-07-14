import React from 'react';
import HomeAnimation from './components/HomeAnimation';
import HomeTitle from './components/HomeTitle';
import HomeParagraph from './components/HomeParagraph';
import FeatureTitle from './components/FeatureTitle';
import Ticker from '../../components/common/Ticker';
import Layout from '../../components/common/Layout';
import Article from '../../components/common/Article';

import './styles/Home.scss';

const left = () => (
  <>
    <HomeAnimation />
    <HomeTitle />
    <HomeParagraph />
    <Ticker />
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
