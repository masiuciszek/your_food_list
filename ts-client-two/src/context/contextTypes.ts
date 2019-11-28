import { DefaultActionsTypes } from '../types';


const contextActions: DefaultActionsTypes = {
  dishes: {
    GET_DISHES: 'GET_DISHES',
    ADD_DISH: 'ADD_DISH',
    DELETE_DISH: 'DELETE_DISH',
    SET_CURRENT: 'SET_CURRENT',
    UPDATE_DISH: 'UPDATE_DISH',
    SEARCH_DISHES: 'SEARCH_DISHES',
    CLEAR_FILTER: 'CLEAR_FILTER',
  },
};


export default contextActions;
