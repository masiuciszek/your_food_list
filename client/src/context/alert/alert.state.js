// @ts-nocheck
import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import alertReducer from './alert.reducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = {
    alerts: [],
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type, time = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), time);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {};

export default AlertProvider;
