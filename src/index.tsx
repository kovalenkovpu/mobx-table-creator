import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';
import { RootStoreProvider } from './contexts';
import rootStore from './stores/root-store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider store={rootStore}>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
