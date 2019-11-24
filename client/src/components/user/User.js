import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import { AuthContext } from '../../context/auth/auth.state';
import { StyledBtn } from '../styled/Buttons';

const StyledUser = styled.section`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.blackShadow};
  box-shadow: ${({ theme }) => theme.lightShadow};
  h3,
  p {
    color: ${({ theme }) => theme.white};
    span {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  h3 {
    font-size: 1.4rem;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 0.5rem;
  }
`;

const User = props => {
  const { user, loading, isAuth } = React.useContext(AuthContext);
  return (
    <StyledUser>
      <h3>
        First Name: <span>{!loading && user && user.firstName}</span>
      </h3>
      <h3>
        last Name: <span>{!loading && user && user.lastName}</span>
      </h3>
      <h3>
        Email: <span>{!loading && user && user.email}</span>
      </h3>
      <p>
        Joined at:{' '}
        {!loading && user && (
          <span>
            {' '}
            <Moment format="MMMM Do YYYY,">{user.date}</Moment>
          </span>
        )}
      </p>
      <BtnGroup>
        <StyledBtn>Edit User</StyledBtn>
        <StyledBtn>Delete User</StyledBtn>
      </BtnGroup>
    </StyledUser>
  );
};

User.propTypes = {};

export default User;
