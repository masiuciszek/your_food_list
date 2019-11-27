/* eslint-disable no-undef */
import contextActions, { ADD_DISH, SET_CURRENT, GET_DISHES } from '../contextTypes';
import { IStateDishes, IActionType } from '../../types';


export default (state: IStateDishes, action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case contextActions.dishes.GET_DISHES:
      return {
        ...state,
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
        dishes: state.dishes.filter((dish) => dish.id !== payload),
        loading: false,
      };
    default:
      return state;
  }
};
