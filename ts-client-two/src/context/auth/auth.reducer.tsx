/* eslint-disable no-undef */
import { IActionType, IStateAuth } from '../../types';
import contextActions from '../contextTypes';

export default (state: IStateAuth, action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case contextActions.auth.LOAD_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload,
      };
    case contextActions.auth.REGISTER_SUCCESS:
    case contextActions.auth.LOGIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false,
      };
    case contextActions.auth.LOG_OUT:
    case contextActions.auth.SERVER_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
      };
    case contextActions.auth.REMOVE_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
        error: payload,
      };
    case contextActions.auth.SERVER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
