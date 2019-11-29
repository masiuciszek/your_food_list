/* eslint-disable no-undef */
import * as React from 'react';
import axios from 'axios';
import { IStateAuth, User } from '../../types';
import authReducer from './auth.reducer';
import contextActions from '../contextTypes';
import setAuthToken from '../../utils/setAuthToken';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateAuth | any = {
  isAuth: false,
  loading: true,
  user: null,
  token: localStorage.getItem('token'),
  error: null,
};

export const authContext = React.createContext<IStateAuth>(initialState);

const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/auth');
      dispatch({
        type: contextActions.auth.LOAD_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.auth.AUTH_ERROR,
      });
    }
  };


  const register = async (formData: User) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/users', formData, config);
      dispatch({
        type: contextActions.auth.REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: contextActions.auth.REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };


  const login = async (formData: {email: string; password: string}) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/auth', formData, config);
      dispatch({
        type: contextActions.auth.LOGIN,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: contextActions.auth.LOGIN_FAIL,
        payload: err.response.data.msg,

      });
    }
  };


  const logout = () => {
    dispatch({
      type: contextActions.auth.LOG_OUT,
    });
  };

  // const clearErrors =() => {}
  const deleteProfile = async () => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        await axios.delete('/auth');
        dispatch({ type: contextActions.auth.REMOVE_USER });
      } catch (err) {
        dispatch({ type: contextActions.auth.AUTH_ERROR, payload: err.message });
      }
    }
  };

  // TODO: Try the logout endpoint

  return (
    <authContext.Provider value={{
      isAuth: state.isAuth,
      loading: state.loading,
      user: state.user,
      token: state.token,
      error: state.error,
      loadUser,
      register,
      logout,
      login,
      deleteProfile,
    }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;
