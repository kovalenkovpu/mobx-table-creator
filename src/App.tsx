import Layout from 'antd/lib/layout';
import React from 'react';

import TodoTableContainer from './containers/TodoTableContainer';

const App = () => (
  <Layout>
    <Layout>
      <Layout.Sider />
      <Layout.Content>
        <TodoTableContainer />
      </Layout.Content>
      <Layout.Sider />
    </Layout>
  </Layout>
);

export default App;
