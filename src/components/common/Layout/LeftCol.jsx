import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import './styles/Layout.scss';

const LeftCol = ({ children }) => (
  <Col span={12} className="layout-col">
    {children}
  </Col>
);

LeftCol.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default LeftCol;
