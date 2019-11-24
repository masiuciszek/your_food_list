import React from 'react';
import PropTypes from 'prop-types';
import User from '../components/user/User';
import { AuthContext } from '../context/auth/auth.state';

const UserPage = () => {
  const { loadUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <User />
    </>
  );
};

UserPage.propTypes = {};

export default UserPage;
