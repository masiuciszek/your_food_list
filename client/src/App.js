import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/styled/Layout';
import { AppWrapper } from './components/styled/AppWrapper';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/404';
import DishProvider from './context/dishes/dish.state';

const App = () => {
  let a;
  return (
    <DishProvider>
      <Layout>
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={ErrorPage} />
          </Switch>
        </AppWrapper>
      </Layout>
    </DishProvider>
  );
};

App.propTypes = {};

export default App;
