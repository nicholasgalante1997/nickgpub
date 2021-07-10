import React from 'react';
import { GiPentarrowsTornado } from 'react-icons/gi';
import '../styles/Home.scss';

const HomeAnimation = () => (
  <div className="home-image-container">
    <GiPentarrowsTornado className="home-image" size={48} />
  </div>
);

export default HomeAnimation;
