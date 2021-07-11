import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import './styles/Layout.scss';

const RightCol = ({ children }) => (
  <Col span={12} className="layout-col-right">
    {children}
  </Col>
);

RightCol.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RightCol;
