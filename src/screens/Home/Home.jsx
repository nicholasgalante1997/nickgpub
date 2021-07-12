import React from 'react';
import HomeAnimation from './components/HomeAnimation';
import HomeTitle from './components/HomeTitle';
import HomeParagraph from './components/HomeParagraph';
import Layout from '../../components/common/Layout';
import Article from '../../components/common/Article';
import FeatureTitle from './components/FeatureTitle';
import './styles/Home.scss';

const left = () => (
  <>
    <HomeAnimation />
    <HomeTitle />
    <HomeParagraph />
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
