import * as React from 'react';
import reducerUser from './reducer.user';
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

interface Props {

}

const initialState: IStateUsers = {
  users: [],
  loading: false,
  error: null,
};

export const UserStore = React.createContext<IStateUsers | any>(initialState);

const [state, dispatch] = React.useReducer(reducerUser, initialState);

const setLoading = () => {
  dispatch({ type: EContextActionTypes.SET_LOADING });
};

const UserProvider: React.FC<Props> = (props: any): JSX.Element => (
  <UserStore.Provider value={{
    users: state.users,
    loading: state.loading,
    error: state.loading,
  }}
  >
    {props.children}
  </UserStore.Provider>
);
export default UserProvider;
