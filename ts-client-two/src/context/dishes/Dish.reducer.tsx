/* eslint-disable no-undef */
import contextActions, { ADD_DISH, SET_CURRENT, GET_DISHES } from '../contextTypes';
import { IStateDishes, IActionType } from '../../types';


export default (state: IStateDishes, action: IActionType) => {
  switch (action.type) {
    case contextActions.dishes.GET_DISHES:
      return {
        ...state,
      };
    case contextActions.dishes.ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, action.payload],
      };
    default:
      return state;
  }
};
