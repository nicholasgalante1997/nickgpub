import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
// import Nav from './Nav';
import LeftCol from './LeftCol';
import RightCol from './RightCol';
import Ticker from '../Ticker';
import './styles/Layout.scss';

const Layout = ({ left, right }) => (
  <>
    <Row className="layout-container">
      <LeftCol>
        {/* <Nav /> */}
        {left()}
      </LeftCol>
      <RightCol>
        {right()}
      </RightCol>
    </Row>
    <Ticker />
  </>
);

Layout.propTypes = {
  left: PropTypes.elementType.isRequired,
  right: PropTypes.elementType.isRequired,
};

export default Layout;
