import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

export default (state: IStateUsers, action: IAction): IStateUsers => {
  switch (action.type) {
    case EContextActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case EContextActionTypes.LOAD_USER:
        return{
          ...state,
          isAuth: true,
          loading: false,
          user: action.payload,
        }
        case EContextActionTypes.LOGIN:
          localStorage.setItem('token',action.payload.token)
          return{
            ...state,
            ...action.payload,
            isAuth: true,
            loading: false
          }
        case EContextActionTypes.USER_ERROR:
          return {
            ...state,
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
