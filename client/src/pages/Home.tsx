import * as React from 'react';
import Users from '../components/users/Users';

interface Props {

}

const Home: React.FC<Props> = () => (
  <div>
    {' '}
    <h1>Home</h1>
    {' '}
    <Users />
    {' '}
  </div>
);
export default Home;
