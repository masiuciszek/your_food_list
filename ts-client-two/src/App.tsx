import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AppWrapper from './components/styled/AppWrapper';
import DishProvider from './context/dishes/dish.state';
import HomePage from './pages/homepage';
import Info from './pages/info';
import About from './pages/about';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App: React.FC = () => {

  return (
    <DishProvider>
      <Layout>
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </AppWrapper>
      </Layout>
    </DishProvider>
  );
};

export default App;
