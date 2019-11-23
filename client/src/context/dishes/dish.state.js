// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import dishReducer from './dish.reducer';
import { ADD_DISH, DELETE_DISH, FILTER_DISH } from '../types';

export const DishContext = React.createContext();

const DishProvider = ({ children }) => {
  const initialState = {
    dishes: [
      {
        id: uuid(),
        name: 'Pizza',
        country: 'Italy',
        type: 'main',
        description: 'Love it it so easy and so tasty boooiiii',
      },
      {
        id: uuid(),
        name: 'PannaCotta',
        country: 'Italy',
        type: 'Desert',
        description: 'Love it it so easy and so tasty boooiiii',
      },
      {
        id: uuid(),
        name: 'Ost Macka',
        country: 'Sweden',
        type: 'breakfast',
        description: 'Love it it so easy and so tasty boooiiii',
      },
    ],
    loading: true,
  };

  const [state, dispatch] = React.useReducer(dishReducer, initialState);

  const addDish = formData => {
    dispatch({
      type: ADD_DISH,
      payload: formData,
    });
  };

  const deleteDish = id => {
    dispatch({
      type: DELETE_DISH,
      payload: id,
    });
  };

  const searchDish = text => {
    dispatch({ type: FILTER_DISH, payload: text });
  };

  return (
    <DishContext.Provider
      value={{
        dishes: state.dishes,
        addDish,
        deleteDish,
        searchDish,
      }}
    >
      {children}
    </DishContext.Provider>
  );
};

DishProvider.propTypes = {
  children: PropTypes.object,
};

export default DishProvider;
