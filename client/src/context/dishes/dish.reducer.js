import { GET_DISHES, ADD_DISH, DELETE_DISH, FILTER_DISH } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};
