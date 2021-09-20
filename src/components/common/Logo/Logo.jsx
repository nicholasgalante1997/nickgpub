import React from 'react';
import PropTypes from 'prop-types';
import { GiPentarrowsTornado } from 'react-icons/gi';

const Logo = ({ size, className }) => (
  <GiPentarrowsTornado className={className} size={size} />
);

Logo.propTypes = {
  size: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

export default Logo;
