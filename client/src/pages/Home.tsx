import * as React from 'react';
import Users from '../components/users/Users';
import styled from 'styled-components';
interface Props {

}

const StyledHome = styled.section`
  height: 80vh;
`;

const Home: React.FC<Props> = () => (
  <StyledHome>
    {' '}
    <h1>Home</h1>
    {' '}
    <Users />
    {' '}
  </StyledHome>
);
export default Home;
