// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import dishReducer from './dish.reducer';

export const DishContext = React.createContext();

const DishProvider = ({ children }) => {
  const initialState = {
    dishes: [
      {
        id: uuid(),
        name: 'Pizza',
        country: 'Italy',
        type: 'main',
      },
      {
        id: uuid(),
        name: 'PannaCotta',
        country: 'Italy',
        type: 'Desert',
      },
      {
        id: uuid(),
        name: 'Ost Macka',
        country: 'Sweden',
        type: 'breakfast',
      },
    ],
  };

  const [state, dispatch] = React.useReducer(dishReducer, initialState);

  return (
    <DishContext.Provider
      value={{
        dishes: state.dishes,
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
