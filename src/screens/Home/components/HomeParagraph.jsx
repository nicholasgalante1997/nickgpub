import React from 'react';
import {
  Divider, Typography,
} from 'antd';
import '../styles/Home.scss';

const { Paragraph, Text } = Typography;

const HomeParagraph = () => (
  <div className="home-left-paragraph-container">
    <Paragraph className="home-left-paragraph">
      It&apos;s the gentrified part of the twilight zone.
      It&apos;s the elevator on the 3rd floor of MC Escher&apos;s paintings that
      you didn&apos;t notice. It&apos;s the bottom of the lake that Narcissus fell into
      when he reached down to save his falling phone from water damage. It&apos;s the
      crack in the Simpson&apos;s couch that we&apos;re all stuck in.&nbsp;
      <p>
        <b>
          It&apos;s the
          world you&apos;re visiting.
        </b>
      </p>
    </Paragraph>
    <Divider />
    <Text className="home-left-paragraph-bottom-text">
      We&apos;re here to bring you
      {' '}
      <Text strong className="home-left-paragraph-bottom-text-strong">
        nothing but the truth,&nbsp;
      </Text>
      but also other things as well from time to time.
    </Text>
    <Text className="home-left-paragraph-bottom-text">
     &nbsp;
    </Text>
  </div>
);

export default HomeParagraph;
