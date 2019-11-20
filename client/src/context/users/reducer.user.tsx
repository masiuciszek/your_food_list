import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

export default (state: IStateUsers, action: IAction): IStateUsers => {
  switch (action.type) {
    case EContextActionTypes.GET_USERS:
      return {
        ...state,

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
