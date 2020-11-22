import Layout from 'antd/lib/layout';
import React from 'react';

import PostsTableContainer from './containers/PostsTableContainer';

const App = () => (
  <Layout>
    <Layout>
      <Layout.Sider />
      <Layout.Content>
        <PostsTableContainer />
      </Layout.Content>
      <Layout.Sider />
    </Layout>
  </Layout>
);

export default App;
