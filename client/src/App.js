import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/styled/Layout';
import { AppWrapper } from './components/styled/AppWrapper';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/404';
import DishProvider from './context/dishes/dish.state';
import AuthProvider from './context/auth/auth.state';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertProvider from './context/alert/alert.state';
import Alert from './components/alert/Alert';
import setAuthToken from './utils/setAuthToken';
import User from './pages/User';
import PrivateRoute from './components/hoc/PrivateRoute';
import Info from './pages/Info';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthProvider>
    <DishProvider>
      <AlertProvider>
        <Layout>
          <AppWrapper>
            <Alert />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/user-profile" component={User} />
              <Route component={ErrorPage} />
            </Switch>
          </AppWrapper>
        </Layout>
      </AlertProvider>
    </DishProvider>
  </AuthProvider>
);

App.propTypes = {};

export default App;
