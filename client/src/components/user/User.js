import React from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/auth/auth.state';

const User = props => {
  const { user, loading, isAuth } = React.useContext(AuthContext);
  return (
    <div>
      <h1>UserProfile {user && user.firstName}</h1>
    </div>
  );
};

User.propTypes = {};

export default User;
