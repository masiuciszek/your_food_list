import { EContextActionTypes, EContextBaseAction } from '../contextTypes';

export default (state: IStateAlerts, action: IAction) => {
  switch (action.type) {
    case EContextActionTypes.SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };

    case EContextActionTypes.REMOVE_ALERT:
      return {
        ...state,
        // alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      return state;
  }
};
