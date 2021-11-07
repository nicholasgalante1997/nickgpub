// Web Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// State Management
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Layout Styles rely on antd
// REVIEW: antd.css must always be above router otherwise the styles are fached.
import 'antd/dist/antd.css';

// Local dependencies
import Router from './Routes';
import { UserContext, defaultUserContext } from './contexts/User';
import root from './store/reducers';

const queryClient = new QueryClient();
const store = createStore(root, applyMiddleware(thunk));

function App() {
  const [userStateContext, setUserStateContext] = useState(defaultUserContext);
  useEffect(() => {
    (async () => console.log(await axios.get('markdown/sample/Lorem.md')))();
  }, []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={[userStateContext, setUserStateContext]}>
          <Router />
          {process.env.environment === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null }
        </UserContext.Provider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
