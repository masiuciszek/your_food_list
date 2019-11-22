/* eslint-disable no-undef */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import UserProvider from './context/users/state.users';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import AlertProvider from './context/alert/alert.state';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  let a;
  return (

    <Layout>
        <AlertProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </AlertProvider>
        </Layout>

  );
};

export default App;
