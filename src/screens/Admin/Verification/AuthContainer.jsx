import React, { useEffect, useState } from 'react';
import couch from '../../../assets/couch.jpg';
import HeimdallrForm from '../../../components/admin/auth/hmdllr';
import './styles/AuthContainer.scss';

const AuthContainer = () => {
  const [signInFormVisible, setSignInFormVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setSignInFormVisible(true), 730);
  }, []);

  return (
    <div className="container-full">
      <img
        src={couch}
        alt="couch-gag"
        style={{
          height: '100%', minHeight: '100%', width: '100%', minWidth: '100%', resize: 'cover',
        }}
      />
      { signInFormVisible ? <HeimdallrForm /> : null }
    </div>
  );
};

export default AuthContainer;
