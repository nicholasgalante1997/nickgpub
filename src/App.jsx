import React, { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'antd/dist/antd.css';

import Router from './Routes';
import { UserContext, defaultUserContext } from './contexts/User';

const queryClient = new QueryClient();

function App() {
  const [userStateContext, setUserStateContext] = useState(defaultUserContext);
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={[userStateContext, setUserStateContext]}>
        <Router />
        {process.env.environment === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null }
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
