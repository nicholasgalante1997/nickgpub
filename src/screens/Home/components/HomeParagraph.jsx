import React from 'react';
import { Typography } from 'antd';
import '../styles/Home.scss';

import lorem from '../../../constants/dev/lorem/loremIpsum';

const { Paragraph } = Typography;

const HomeParagraph = () => (
  <div className="home-left-paragraph-container">
    <Paragraph className="home-left-paragraph">
      {lorem.medium}
    </Paragraph>
  </div>
);

export default HomeParagraph;
