import {
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {};
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
        token: null,
        error: payload,
      };

    default:
      return state;
  }
};
