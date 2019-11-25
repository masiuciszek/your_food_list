import {
  GET_DISHES,
  ADD_DISH,
  DELETE_DISH,
  FILTER_DISH,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DISH,
  CLEAR_FILTER,
  DISH_ERROR,
  CLEAR_DISHES,
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_DISHES:
      return {
        ...state,
        dishes: payload,
        loading: false,
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, payload],
        loading: false,
      };
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter(dish => dish.id !== payload),
        loading: false,
      };
    case FILTER_DISH:
      return {
        ...state,
        filteredDishes: state.dishes.filter(dish => {
          const text = new RegExp(`${payload}`, 'gi');
          return dish.name.match(text) || dish.name.match(text);
        }),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredDishes: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_DISHES:
      return {
        ...state,
        dishes: null,
        filteredDishes: null,
        error: null,
        current: null,
      };
    case UPDATE_DISH:
      return {
        ...state,
        dishes: state.dishes.map(dish =>
          dish._id === payload._id ? payload : dish
        ),
        loading: false,
      };
    case DISH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
