import { USER_LOADED } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {};

    default:
      return state;
  }
};
