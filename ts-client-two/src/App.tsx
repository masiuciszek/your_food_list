import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AppWrapper from './components/styled/AppWrapper';
import DishProvider from './context/dishes/dish.state';
import HomePage from './pages/homepage';

const App: React.FC = () => {
  let sadas;
  return (
    <DishProvider>
      <Layout>
        <AppWrapper>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </AppWrapper>
      </Layout>
    </DishProvider>
  );
};

export default App;
