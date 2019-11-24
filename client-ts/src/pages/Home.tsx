import * as React from 'react';
import Users from '../components/users/Users';
import styled from 'styled-components';
import { UserStore } from '../context/users/state.users';
interface Props {

}

const StyledHome = styled.section`
  height: 80vh;
`;

const Home: React.FC<Props> = () => {
  const{loadUser} = React.useContext(UserStore)
  React.useEffect(() => {
    loadUser()
  },[])

  return(

  <StyledHome>
    {' '}
    <h1>Home</h1>
    {' '}
    <Users />
    {' '}
  </StyledHome>
);
}
export default Home;
