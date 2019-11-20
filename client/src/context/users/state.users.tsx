import * as React from 'react';
import axios from 'axios';
import userReducer from './user.reducer';
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';
// interface Props {

// }

const initialState: IStateUsers = {
  users: [],
  loading: false,
  error: null,
};

export const UserStore = React.createContext<IStateUsers | any>(initialState);


const UserProvider: React.FC = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const setLoading = () => {
    dispatch({ type: EContextActionTypes.SET_LOADING });
  };

  const getUsers = async () => {
    try {
      setLoading();
      const res = await axios.get('/users');
      dispatch({ type: EContextActionTypes.GET_USERS, payload: res.data });
    } catch (err) {
      dispatch({ type: EContextActionTypes.USER_ERROR, payload: err.message });
    }
  };
  return (
    <UserStore.Provider value={{
      users: state.users,
      loading: state.loading,
      error: state.loading,
      getUsers,
    }}
    >
      {props.children}
    </UserStore.Provider>
  );
};
export default UserProvider;
