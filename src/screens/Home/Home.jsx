import React from 'react';
import {
  Row, Col, Divider, Typography,
} from 'antd';
// import wave from '../../assets/wave.jpg';
import { GiPentarrowsTornado } from 'react-icons/gi';
import './styles/Home.scss';

const {
  Paragraph, Text,
} = Typography;

const Home = () => (
  <Row className="home-container">
    <Col span={12} className="home-col">
      <div className="home-image-container">
        <GiPentarrowsTornado className="home-image" size={48} />
      </div>
      <div className="home-left-title-container">
        <h1 className="home-text">For Your Consideration</h1>
      </div>
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
          but also other things as well from time to time. Treat this place
          as you would an self-checkout line, and shove what&apos;s shiny
          in your pockets and leave the rest at the cashier.
        </Text>
      </div>
    </Col>
    <Col span={12} className="home-col-right">
      <h1 className="home-text-soft">Action Container</h1>
      {' '}
      <Divider className="divider">
        <Paragraph className="divider-text">
          Decide what content goes here maybe itll just be a cool icon
        </Paragraph>
      </Divider>
    </Col>
  </Row>
);

export default Home;
