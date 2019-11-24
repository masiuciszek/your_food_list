import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/auth/auth.state';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth, loading } = useContext(AuthContext);
  // TODO: DELETE
  console.log(Component, rest);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuth && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
