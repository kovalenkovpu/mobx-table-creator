import Layout from 'antd/lib/layout';
import React from 'react';

import PetsTableContainer from './containers/PetsTableContainer';

const App = () => (
  <Layout>
    <Layout.Header />
    <Layout>
      <Layout.Content>
        <PetsTableContainer />
      </Layout.Content>
    </Layout>
  </Layout>
);

export default App;
