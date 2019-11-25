// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import axios from 'axios';
import dishReducer from './dish.reducer';
import {
  ADD_DISH,
  DELETE_DISH,
  FILTER_DISH,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DISH,
  DISH_ERROR,
  GET_DISHES,
} from '../types';

export const DishContext = React.createContext();

const DishProvider = ({ children }) => {
  const initialState = {
    dishes: null,
    loading: true,
    filteredDishes: null,
    current: null,
    error: null,
  };

  const [state, dispatch] = React.useReducer(dishReducer, initialState);

  const getDishes = async () => {
    try {
      const res = await axios.get('/dishes');
      dispatch({
        type: GET_DISHES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DISH_ERROR,
        payload: err.response,
      });
    }
  };

  const addDish = async newDish => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/dishes', newDish, config);

      dispatch({
        type: ADD_DISH,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: DISH_ERROR,
        payload: err.response,
      });
    }
  };

  const deleteDish = async id => {
    try {
      await axios.delete(`/dishes/${id}`);
      dispatch({
        type: DELETE_DISH,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: DISH_ERROR,
        payload: err.response,
      });
    }
  };

  const setCurrent = dish => {
    dispatch({
      type: SET_CURRENT,
      payload: dish,
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const searchDish = text => {
    dispatch({ type: FILTER_DISH, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const updateDish = dish => {
    dispatch({
      type: UPDATE_DISH,
      payload: dish,
    });
  };

  return (
    <DishContext.Provider
      value={{
        dishes: state.dishes,
        filteredDishes: state.filteredDishes,
        current: state.current,
        error: state.error,
        getDishes,
        addDish,
        deleteDish,
        searchDish,
        clearFilter,
        setCurrent,
        clearCurrent,
        updateDish,
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
