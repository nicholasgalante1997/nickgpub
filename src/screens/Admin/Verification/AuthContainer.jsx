import React from 'react';
import couch from '../../../assets/couch.jpg';
import './styles/AuthContainer.scss';

const AuthContainer = () => (
  <div className="container-full">
    <img
      src={couch}
      alt="couch-gag"
      style={{
        height: '100%', minHeight: '100%', width: '100%', minWidth: '100%', resize: 'cover',
      }}
    />
  </div>
);

export default AuthContainer;
