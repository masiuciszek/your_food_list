import React from 'react';
import PropTypes from 'prop-types';
import Layout from './components/styled/Layout';
import { AppWrapper } from './components/styled/AppWrapper';

const App = () => {
  let a;
  return (
    <Layout>
      <AppWrapper>
        <h1>App</h1>
      </AppWrapper>
    </Layout>
  );
};

App.propTypes = {};

export default App;
