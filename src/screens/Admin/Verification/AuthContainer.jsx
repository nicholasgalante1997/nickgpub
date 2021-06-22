import React from 'react';
import PropTypes from 'prop-types';

import './styles/AuthContainer.scss';

const AuthContainer = ({ children }) => (
  <div className="container-full">
      <img src={require('../../../assets/couch.jpg')} style={{height: '100%',  minHeight: '100%', width: '100%', minWidth: '100%', resize: 'cover'}} />
    {children}
  </div>
);

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContainer;
