import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import Nav from './Nav';
import './styles/Layout.scss';

const Layout = ({ children }) => (
  <>
    <Nav />
    <Row className="layout-container">
      {children}
    </Row>
  </>
);

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Layout;
