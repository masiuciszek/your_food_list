/* eslint-disable no-undef */
export default (state: IStateDishes, action: IActionType) => {
  switch (action.type) {
    case EContextDishesActions.GET_DISHES:
      return {
        ...state,
      };

    default:
      return state;
  }
};
