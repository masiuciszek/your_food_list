import { GET_DISHES } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_DISHES:
      return {
        ...state,
      };

    default:
      return state;
  }
};
