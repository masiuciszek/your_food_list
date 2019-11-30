import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { authContext } from '../../context/auth/auth.state';
import BtnPrimary from '../styled/Button';
import useToggle from '../../hooks/useToggle';
import ProfileForm from './ProfileForm';

interface Props {
  history: React.ReactNode;
}

type ProfileProp = RouteComponentProps;

export const StyledProfile = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  background: ${({ theme }) => theme.colors.blackShadow};
  min-height:30vh;
  max-width: 60rem;
  margin: 5rem auto;
  padding: 1rem 1.7rem;
  color: ${({ theme }) => theme.colors.white};
  h1{
    text-transform: uppercase;
  }
  .body{}
  .btn-group{
    display: flex;
    justify-content: flex-end;
    button {
      margin: 0 .5rem;
      width: 13rem;
    }
  }
  p{
    line-height: 2rem;
  }
`;

const Profile: React.FC<ProfileProp> = ({ history }) => {
  const {
    user, loading, deleteProfile, loadUser,
  } = React.useContext(authContext);

  const [edit, toggleEdit] = useToggle(false);

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
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
          {!edit && <BtnPrimary onClick={() => deleteProfile()}>Delete Profile</BtnPrimary>}


        </div>
      </StyledProfile>
      {edit && <ProfileForm /> }
    </>
  );
};

// <BtnPrimary onClick={toggleEdit}>{edit ? 'Done ' : 'Edit'}</BtnPrimary>
export default withRouter(Profile);
