import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import UserProvider from './context/users/state.users';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';

const App: React.FC = () => {
  let a;
  return (
    <Layout>
      <UserProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={Register} />
          <Route path="/register" exact component={Login} />
        </Switch>
      </UserProvider>
    </Layout>
  );
};

export default App;
