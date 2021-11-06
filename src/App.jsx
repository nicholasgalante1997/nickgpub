import React, { useState, useEffect } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'antd/dist/antd.css';
import axios from 'axios';
import Router from './Routes';
import { UserContext, defaultUserContext } from './contexts/User';

const queryClient = new QueryClient();

function App() {
  const [userStateContext, setUserStateContext] = useState(defaultUserContext);
  useEffect(() => {
    (async () => console.log(await axios.get('markdown/sample/Lorem.md')))();
  }, []);
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
