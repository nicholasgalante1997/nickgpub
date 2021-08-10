import React from 'react';
import { Typography } from 'antd';
import bookcase from '../../../assets/bookcase.jpeg';

const { Title, Paragraph } = Typography;

const BabyBlurbSection = () => (
  <div className="home-blurb-container">
    <div className="home-blurb-image-container">
      <img src={bookcase} className="home-blurb-image" alt="bookcase" />
    </div>
    <div>
      <Title>Title</Title>
      <Paragraph>Paragraph</Paragraph>
    </div>
  </div>
);

export default BabyBlurbSection;
