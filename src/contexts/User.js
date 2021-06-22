import React from 'react';

const UserContext = React.createContext();

const defaultUserContext = {
  authenticated: false,
  user: null,
};

export { UserContext, defaultUserContext };
