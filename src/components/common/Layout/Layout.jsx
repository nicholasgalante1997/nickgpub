import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import LeftCol from './LeftCol';
import RightCol from './RightCol';
import './styles/Layout.scss';
import Nav from './Nav';

const Layout = ({ left, right }) => (
  <Row className="layout-container">
    <LeftCol>
      <Nav />
      {left()}
    </LeftCol>
    <RightCol>
      {right()}
    </RightCol>
  </Row>
);

Layout.propTypes = {
  left: PropTypes.elementType.isRequired,
  right: PropTypes.elementType.isRequired,
};

export default Layout;
