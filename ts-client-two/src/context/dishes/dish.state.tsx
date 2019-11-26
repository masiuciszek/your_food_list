/* eslint-disable react/prop-types */
import * as React from 'react';
import uuid from 'uuid/v4';
import { string } from 'prop-types';
import DishReducer from './Dish.reducer';


interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateDishes = {
  dishes: [
    {
      id: uuid(), name: 'Pizza', description: 'love pizza with great bread', country: 'Italy', type: 'main',
    },
    {
      id: uuid(), name: 'Tomato Soup', description: 'soup with a touch', country: 'Spain', type: 'snack',
    },
    {
      id: uuid(), name: 'Apple Pie', description: 'Warm apple pie with Vanilla souse is awesome!', country: 'America', type: 'dessert',
    },
    {
      id: uuid(), name: 'English breakfast', description: 'English Breakfast', country: 'England', type: 'breakfast',
    },
  ],
  error: null,
  loading: true,
  flirtedDishes: null,
  current: null,
};

export const DishContext = React.createContext<IStateDishes>(initialState);


const DishProvider: React.FC<Props> = ({ children }): JSX.Element => {
  let a;
  const [state, dispatch] = React.useReducer(DishReducer, initialState);
  return (
    <DishContext.Provider value={{
      dishes: state.dishes,
      error: state.error,
      loading: state.loading,
      flirtedDishes: state.flirtedDishes,
      current: state.current,
    }}
    >
      {children}
    </DishContext.Provider>
  );
};
export default DishProvider;
