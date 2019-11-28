import * as React from 'react'
import { IStateAuth } from '../../types';
import authReducer from './auth.reducer';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateAuth = {
  isAuth: false,
  loading: true,
  user: null,
  token: localStorage.getItem('token'),
  error: null
}

export const authContext = React.createContext<IStateAuth>(initialState)

 const AuthProvider: React.FC<Props> = ({children}): JSX.Element => {

  const [state,dispatch] = React.useReducer(authReducer,initialState)

    return (
      <authContext.Provider value={{
        isAuth: state.isAuth,
        loading: state.loading,
        user: state.user,
        token: state.token,
        error: state.error,
      }}>
        {children}
      </authContext.Provider>
    );
}
export default AuthProvider