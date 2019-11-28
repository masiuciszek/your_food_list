import * as React from 'react'
import { IStateAuth, User } from '../../types';
import authReducer from './auth.reducer';
import axios from 'axios'
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
  error: null
}

export const authContext = React.createContext<IStateAuth>(initialState)

 const AuthProvider: React.FC<Props> = ({children}): JSX.Element => {

  const [state,dispatch] = React.useReducer(authReducer,initialState)

    const loadUser = async () => {
      setAuthToken(localStorage.token)
      try {
        const res = await axios.get('/auth')
        dispatch({
          type: contextActions.auth.LOAD_USER,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: contextActions.auth.AUTH_ERROR
        })
      }
    }


    const register = async (formData: User) => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      try {
        const res  = await axios.post('/users', formData,config)
        dispatch({
          type: contextActions.auth.REGISTER_SUCCESS,
          payload: res.data
        })
        loadUser()
      } catch (err) {
        dispatch({
          type: contextActions.auth.REGISTER_FAIL,
          payload: err.response.data.msg
        })
      }
    }
    const login  =() => {}
    const logout =() => {
      dispatch({
        type: contextActions.auth.LOG_OUT
      })
    }
    // const clearErrors =() => {}
    // const deleteProfile =() => {}

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
      }}>
        {children}
      </authContext.Provider>
    );
}
export default AuthProvider