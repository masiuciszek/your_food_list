/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import contextActions from '../contextTypes';
import { IStateDishes, IActionType } from '../../types';


export default (state: IStateDishes, action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case contextActions.dishes.GET_DISHES:
      return {
        ...state,
        dishes: payload,
        loading: false,
      };
    case contextActions.dishes.ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, payload],
        loading: false,
      };
    case contextActions.dishes.DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish._id !== payload),
        loading: false,
      };
    case contextActions.dishes.SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case contextActions.dishes.UPDATE_DISH:
      return {
        ...state,
        dishes: state.dishes.map((dish) => (dish._id === payload._id ? payload : dish)),
        loading: false,
      };
    case contextActions.dishes.SEARCH_DISHES:
      return {
        ...state,
        flirtedDishes: state.dishes.filter((dish) => {
          const text = new RegExp(`${payload}`, 'gi');
          return dish.name.match(text) || dish.country.match(text);
        }),
      };
    case contextActions.dishes.CLEAR_FILTER:
      return {
        ...state,
        flirtedDishes: null,
      };
    case contextActions.dishes.DISH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
