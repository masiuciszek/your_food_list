import * as React from 'react';
import Dishes from '../components/dishes/Dishes';

interface Props {

}

const HomePage: React.FC<Props> = () => (
  <>
    <h1>HomePage</h1>
    <Dishes />
    {' '}
  </>
);
export default HomePage;
