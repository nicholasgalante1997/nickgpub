import React from 'react';
import { Typography } from 'antd';
import '../styles/Home.scss';

import lorem from '../../../constants/dev/lorem/loremIpsum';

const { Paragraph } = Typography;

const HomeParagraph = () => (
  <div className="home-left-paragraph-container">
    <Paragraph className="home-left-paragraph">
      {/* It&apos;s the gentrified part of the twilight zone.
      It&apos;s the elevator on the 3rd floor of MC Escher&apos;s paintings that
      you didn&apos;t notice. It&apos;s the bottom of the lake that Narcissus fell into
      when he reached down to save his falling phone from water damage. It&apos;s the
      crack in the Simpson&apos;s couch that we&apos;re all stuck in.&nbsp;
      <p>
        <b>
          It&apos;s the
          world you&apos;re visiting.
        </b>
      </p> */}
      {lorem.medium}
    </Paragraph>
  </div>
);

export default HomeParagraph;
