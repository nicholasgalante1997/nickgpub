import React, { useState } from 'react';
import 'antd/dist/antd.css';

import Router from './Routes';
import { UserContext, defaultUserContext } from './contexts/User';

function App() {
  const [userStateContext, setUserStateContext] = useState(defaultUserContext);
  return (
    <UserContext.Provider value={[userStateContext, setUserStateContext]}>
      <Router />
    </UserContext.Provider>

  );
}

export default App;
