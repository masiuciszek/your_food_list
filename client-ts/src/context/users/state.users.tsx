/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import * as React from 'react';
import axios from 'axios';
import userReducer from './user.reducer';
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';
import setAuthToken from '../../utils/setAuthToken';

interface Props {
  children: React.ReactNode;
}

const initialState: IStateUsers = {
  users: [],
  loading: true,
  error: null,
  user: null,
  isAuth: false,
  token: localStorage.getItem('token'),
};

export const UserStore = React.createContext<IStateUsers | any>(initialState);


const UserProvider: React.FC = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);


  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/auth');
      dispatch({
        type: EContextActionTypes.LOAD_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR });
    }
  };

  const getUsers = async () => {
    try {
      // setLoading();
      const res = await axios.get('/users');
      dispatch({ type: EContextActionTypes.GET_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR, payload: err.message });
    }
  };

  const login = async (formData: FormDataLogin) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/auth', formData, config);
      dispatch(
        {
          type: EContextActionTypes.LOGIN,
          payload: res.data,
        },
      );
      loadUser();
    } catch (err) {
      dispatch({ type: EContextActionTypes.LOGIN_FAIL, payload: err.message });
    }
  };

  const logout = () => {
    dispatch({
      type: EContextActionTypes.LOG_OUT,
    });
  };

  return (
    <UserStore.Provider value={{
      users: state.users,
      loading: state.loading,
      error: state.loading,
      user: state.user,
      token: state.token,
      isAuth: state.isAuth,
      getUsers,
      loadUser,
      login,

      logout,
    }}
    >
      {children}
    </UserStore.Provider>
  );
};
export default UserProvider;
