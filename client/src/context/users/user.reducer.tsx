import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

export default (state: IStateUsers, action: IAction): IStateUsers => {
  switch (action.type) {
    case EContextActionTypes.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case EContextActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case EContextActionTypes.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
