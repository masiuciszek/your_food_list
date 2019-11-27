import { DefaultActionsTypes } from '../types';

export const GET_DISHES = 'GET_DISHES';
export const ADD_DISH = 'ADD_DISH';
export const SET_CURRENT = 'SET_CURRENT';
export const REMOVE_DISH = 'REMOVE_DISH';


const contextActions: DefaultActionsTypes = {
  dishes: {
    GET_DISHES: 'GET_DISHES',
    ADD_DISH: 'ADD_DISH',
    DELETE_DISH: 'DELETE_DISH',
    SET_CURRENT: 'SET_CURRENT',
    UPDATE_DISH: 'UPDATE_DISH',
  },
};


export default contextActions;
