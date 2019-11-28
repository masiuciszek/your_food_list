import {  IActionType, IStateAuth } from '../../types';
import contextActions from '../contextTypes';
export default (state:IStateAuth, action: IActionType) => {
  const{type,payload} = action
  switch (type) {
    case contextActions.auth.LOAD_USER:
        return{
          ...state,
          isAuth: true,
          loading: false,
          user: payload
        }
        case contextActions.auth.REGISTER_SUCCESS:
          localStorage.setItem('token', payload.token)
          return{
            ...state,
            ...payload,
            isAuth:true,
            loading: false,
          }
        case contextActions.auth.LOG_OUT:
            localStorage.removeItem('token');
          return{
            ...state,
            token:null,
            isAuth: false,
            loading: false,
            user:null
          }

    default:
        return state
  }
}