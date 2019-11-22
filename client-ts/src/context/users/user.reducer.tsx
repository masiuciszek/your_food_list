/* eslint-disable no-undef */
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

export default (state: IStateUsers, action: IAction): IStateUsers => {
  switch (action.type) {
    case EContextActionTypes.LOAD_USER:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      };
    case EContextActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case EContextActionTypes.REGISTER_SUCCESS:
    case EContextActionTypes.LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      };
    case EContextActionTypes.REGISTER_FAIL:
    case EContextActionTypes.USER_ERROR:
    case EContextActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        token: null,
        loading: false,
        user: null,
        error: action.payload,
      };

    case EContextActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
