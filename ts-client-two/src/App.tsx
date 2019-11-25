import React from 'react';
import Layout from './components/Layout';
import AppWrapper from './components/styled/AppWrapper';

const App: React.FC = () => {
  let a;
  return (
    <Layout>
      <AppWrapper>
        <h1>App</h1>
      </AppWrapper>
    </Layout>
  );
};

export default App;
