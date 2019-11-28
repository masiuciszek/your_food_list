/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import * as React from 'react';
import uuid from 'uuid/v4';
import contextActions from '../contextTypes';
import DishReducer from './Dish.reducer';
import { IStateDishes, Dish } from '../../types';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateDishes | any = {
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
  const [state, dispatch] = React.useReducer(DishReducer, initialState);

  const addDish = (newDish: Dish) => {
    dispatch({
      type: contextActions.dishes.ADD_DISH,
      payload: newDish,
    });
  };

  const deleteDish = (id: string) => {
    dispatch({
      type: contextActions.dishes.DELETE_DISH,
      payload: id,
    });
  };

  const setCurrent = (dish: Dish) => dispatch({ type: contextActions.dishes.SET_CURRENT, payload: dish });

  const updateDish = (formData: Dish) => {
    dispatch({
      type: contextActions.dishes.UPDATE_DISH,
      payload: formData,
    });
  };

  const searchDish = (text:string) => {
    dispatch({
      type: contextActions.dishes.SEARCH_DISHES,
      payload: text
    })
  }

  const clearFilter = () => {
    dispatch({
      type: contextActions.dishes.CLEAR_FILTER
    })
  }

  return (
    <DishContext.Provider value={{
      dishes: state.dishes,
      error: state.error,
      loading: state.loading,
      flirtedDishes: state.flirtedDishes,
      current: state.current,
      addDish,
      deleteDish,
      setCurrent,
      updateDish,
      searchDish,
      clearFilter
    }}
    >
      {children}
    </DishContext.Provider>
  );
};
export default DishProvider;
