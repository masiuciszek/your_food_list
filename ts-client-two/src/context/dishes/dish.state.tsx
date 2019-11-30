/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import * as React from 'react';

import axios from 'axios';
import contextActions from '../contextTypes';
import DishReducer from './Dish.reducer';
import { IStateDishes, Dish } from '../../types';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateDishes | any = {
  dishes: [],
  error: null,
  loading: true,
  flirtedDishes: null,
  current: null,
};

export const DishContext = React.createContext<IStateDishes>(initialState);


const DishProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(DishReducer, initialState);

  const getDishes = async () => {
    try {
      const res = await axios.get('/dishes');
      dispatch({
        type: contextActions.dishes.GET_DISHES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.dishes.DISH_ERROR,
        payload: err.message,
      });
    }
  };

  const addDish = async (newDish: Dish) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/dishes', newDish, config);
      dispatch({
        type: contextActions.dishes.ADD_DISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.dishes.DISH_ERROR,
        payload: err.message,
      });
    }
  };

  const deleteDish = async (id: string) => {
    try {
      await axios.delete(`/dishes/${id}`);
      dispatch({
        type: contextActions.dishes.DELETE_DISH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: contextActions.dishes.DISH_ERROR,
        payload: err.message,
      });
    }
  };

  const setCurrent = (dish: Dish) => dispatch({ type: contextActions.dishes.SET_CURRENT, payload: dish });

  const updateDish = async (dish: Dish) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/dishes/${dish._id}`, dish, config);
      dispatch({
        type: contextActions.dishes.UPDATE_DISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.dishes.DISH_ERROR,
        payload: err.message,
      });
    }
  };


  const searchDish = (text: string) => {
    dispatch({
      type: contextActions.dishes.SEARCH_DISHES,
      payload: text,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: contextActions.dishes.CLEAR_FILTER,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: contextActions.dishes.CLEAR_CURRENT,
    });
  };

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
      clearFilter,
      getDishes,
      clearCurrent,
    }}
    >
      {children}
    </DishContext.Provider>
  );
};
export default DishProvider;
