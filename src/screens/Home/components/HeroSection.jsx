import React from 'react';
import HomeTitle from './HomeTitle';
import HomeAnimation from './HomeAnimation';
import HomeParagraph from './HomeParagraph';
import '../styles/Home.scss';

const HeroSection = () => (
  <div className="home-hero-container">
    <div className="home-hero-section">
      <HomeAnimation />
      <HomeTitle />
    </div>
    <HomeParagraph />
  </div>
);

export default HeroSection;
