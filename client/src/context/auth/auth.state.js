import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import authReducer from './auth.reducer';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: false,
    loading: true,
    error: null,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = () => {};
  const login = () => {};
  const register = () => {};

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        error: state.error,
        user: state.user,
        loadUser,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;
