import React from 'react';
import { Divider } from 'antd';
import Layout from '../../components/common/Layout';
import HeroSection from './components/HeroSection';
import './styles/Home.scss';

const Home = () => (
  <Layout>
    <HeroSection />
    <Divider className="divider" />
  </Layout>
);

export default Home;
