import React from 'react';
import { Typography } from 'antd';
import TextConstants from '../../../constants/text';
import '../styles/Home.scss';

const { Paragraph } = Typography;
const { homeParagraph } = TextConstants;

const HomeParagraph = () => (
  <div className="home-paragraph-container">
    <Paragraph className="home-paragraph">
      {homeParagraph}
    </Paragraph>
  </div>
);

export default HomeParagraph;
