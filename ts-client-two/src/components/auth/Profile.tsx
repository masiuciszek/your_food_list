import * as React from 'react';
import styled from 'styled-components';
import { authContext } from '../../context/auth/auth.state';
import BtnPrimary from '../styled/Button';

interface Props {

}

const StyledProfile = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  background: ${({ theme }) => theme.colors.blackShadow};
  min-height:30vh;
  margin: 5rem auto;
  padding: 1rem 1.7rem;
  color: ${({ theme }) => theme.colors.white};
  .body{}
  .btn-group{
    display: flex;
    justify-content: flex-end;
    button {
      margin: 0 .5rem;
    }
  }
`;

const Profile: React.FC<Props> = () => {
  const {
    isAuth, user, loading, loadUser,
  } = React.useContext(authContext);

  React.useEffect(() => {
    loadUser();
  }, []);
  return (
    <StyledProfile>
      <h1>
        Hello
        {' '}
        <span>
          {' '}
          {!loading && user && user.firstName}
        </span>
      </h1>
      <div className="body">
        <h3>
        First Name:
          {' '}
          {!loading && user && user.firstName}
        </h3>
        <h3>
        Last Name:
          {' '}
          {!loading && user && user.lastName}
        </h3>
        <h3>
        Email:
          {' '}
          {!loading && user && user.email}
        </h3>
      </div>
      <div className="btn-group">
        <BtnPrimary>Edit</BtnPrimary>
        <BtnPrimary>Delete</BtnPrimary>
      </div>
    </StyledProfile>
  );
};
export default Profile;
