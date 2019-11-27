/* eslint-disable no-undef */
export default (state: IStateDishes, action: IActionType) => {
  switch (action.type) {
    case EContextDishesActions.GET_DISHES:
      return {
        ...state,
      };
    case EContextDishesActions.ADD_DISH:
      return {
        ...state,
        dishes: [...state.dishes, action.payload],
      };
    default:
      return state;
  }
};
