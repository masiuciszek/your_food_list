import React from 'react';
import Layout from './components/Layout';
import UserProvider from './context/users/state.users';


const App: React.FC = () => {
  let a;
  return (
    <Layout>
      <UserProvider>
        <div className="App">
          <h1>apa</h1>
        </div>
      </UserProvider>
    </Layout>
  );
};

export default App;
