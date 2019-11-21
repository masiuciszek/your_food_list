import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserProvider from './context/users/state.users';


ReactDOM.render(<Router>
  {' '}
  <UserProvider>
  <App />
  </UserProvider>
  {' '}
</Router>, document.getElementById('root'));
