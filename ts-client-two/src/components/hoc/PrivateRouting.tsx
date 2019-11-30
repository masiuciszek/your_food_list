/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  Redirect, Route,
} from 'react-router-dom';
import { authContext } from '../../context/auth/auth.state';

interface Props {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

const PrivateRouting: React.FC<Props> = ({ component: Component, ...otherProps }) => {
  const { isAuth, loading } = React.useContext(authContext);

  return (
    <>
      <Route
        {...otherProps}
        render={(props) => (!isAuth && loading ? (<Redirect to="/login" />) : <Component {...props} />)}
      />
    </>
  );
};
export default PrivateRouting;
