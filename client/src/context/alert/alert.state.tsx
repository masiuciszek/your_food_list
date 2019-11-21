/* eslint-disable react/prop-types */
import * as React from 'react';
import uuid from 'uuid/v4';
import { string } from 'prop-types';
import { EContextActionTypes, EContextBaseAction } from '../contextTypes';
import alertReducer from './alert.reducer';

type Props = {
  children: React.ReactNode;
}

const initialState: IStateAlerts = {
  alerts: [],
};
export const AlertStore = React.createContext<IStateAlerts | any>(initialState);

const AlertProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string, time = 5000) => {
    const id: string = uuid();
    dispatch({
      type: EContextActionTypes.SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(() => dispatch({ type: EContextActionTypes.REMOVE_ALERT, payload: id }), time);
  };


  return (
    <AlertStore.Provider value={{ alerts: state.alerts, setAlert }}>
      {' '}
      {children}
      {' '}
    </AlertStore.Provider>
  );
};
export default AlertProvider;
