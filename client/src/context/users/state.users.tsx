import * as React from 'react';
import axios from 'axios';
import userReducer from './user.reducer';
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';
import setAuthToken from '../../utils/setAuthToken';
// interface Props {

// }

const initialState: IStateUsers = {
  users: [],
  loading: true,
  error: null,
  user: null,
  isAuth:false,
  token: localStorage.getItem('token')
};

export const UserStore = React.createContext<IStateUsers | any>(initialState);


const UserProvider: React.FC = (props: any): JSX.Element => {


  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const setLoading = () => {
    dispatch({ type: EContextActionTypes.SET_LOADING });
  };

  const loadUser = async () => {
    setAuthToken(localStorage.token)
    try {
      const res = await axios.get('/auth');
      dispatch({
        type: EContextActionTypes.LOAD_USER,
        payload: res.data
      })
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR, payload: err.message });
    }
  }

  const getUsers = async () => {
    try {
      // setLoading();
      const res = await axios.get('/users');
      dispatch({ type: EContextActionTypes.GET_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR, payload: err.message });
    }
  };

  const login = async (formData:FormDataLogin) => {
    const config = {
      headers: {
        "Content-Type":'application/json'
      }
    }
    try {
      const res = await axios.post('/auth',formData,config)
      dispatch({type: EContextActionTypes.LOGIN, payload:res.data})
      loadUser()
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR, payload: err.message });

    }
  }

  return (
    <UserStore.Provider value={{
      users: state.users,
      loading: state.loading,
      error: state.loading,
      user:state.user,
      token: state.token,
      isAuth:state.isAuth,
      getUsers,
      loadUser
    }}
    >
      {props.children}
    </UserStore.Provider>
  );
};
export default UserProvider;
