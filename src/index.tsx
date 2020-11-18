import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';
import { RootStoreProvider } from './contexts';
import rootStore from './stores/rootStore';

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider store={rootStore}>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
