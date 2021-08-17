import React from 'react';
import { Typography } from 'antd';
import TextConstants from '../../../constants/text';
import '../styles/Home.scss';

const { Paragraph } = Typography;
const { homeParagraph } = TextConstants;

const HomeParagraph = () => (
  <div className="home-left-paragraph-container">
    <Paragraph className="home-left-paragraph">
      {homeParagraph}
      <ul>
        <li>I&apos;m Troy McClure, and you may not remember me</li>
        <li>The Couch Gag</li>
        <li>What do you know about the Harts?</li>
      </ul>
      And so many more!
    </Paragraph>
    <hr />
  </div>
);

export default HomeParagraph;
