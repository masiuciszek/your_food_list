import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import authReducer from './auth.reducer';
import { REGISTER_FAIL, REGISTER_SUCCESS, CLEAR_ERRORS } from '../types';

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

  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/users', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

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
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;
