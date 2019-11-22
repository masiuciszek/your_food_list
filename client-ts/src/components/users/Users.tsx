import * as React from 'react';
import styled from 'styled-components';
import { UserStore } from '../../context/users/state.users';

interface Props {


}

const StyledUsers = styled.section`
  padding: 4rem 0;
`;

const Users: React.FC<Props> = () => {
  const { users, getUsers } = React.useContext(UserStore);
  React.useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <StyledUsers>
      {' '}
      <h1>Users</h1>
      {' '}
    </StyledUsers>
  );
};
export default Users;
