import React from 'react';
import PropTypes from 'prop-types';

import './styles/AuthContainer.scss';

const AuthContainer = ({ children }) => (
  <div className="container-full">
    {children}
  </div>
);

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContainer;
