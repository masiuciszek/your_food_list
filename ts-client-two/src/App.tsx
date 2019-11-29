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
import AuthProvider from './context/auth/auth.state';
import setAuthToken from './utils/setAuthToken';
import Profile from './components/auth/Profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => (
  <AuthProvider>
    <DishProvider>
      <Layout>
        <AppWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </AppWrapper>
      </Layout>
    </DishProvider>
  </AuthProvider>
);

export default App;
