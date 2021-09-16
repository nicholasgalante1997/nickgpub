import React from 'react';
import Layout from '../../components/common/Layout';
import HeroSection from './components/HeroSection';
import HomeParagraph from './components/HomeParagraph';
import './styles/Home.scss';

const Home = () => (
  <Layout>
    <HeroSection />
    <HomeParagraph />
  </Layout>
);

export default Home;
