/* eslint-disable import/prefer-default-export */

export enum EContextActionTypes {
  SET_LOADING = 'SET_LOADING',
  REGISTER_USER = 'REGISTER_USER',
  ADD_DISH = 'ADD_DISH',
  GET_USERS = 'GET_USERS',
  REMOVE_USER = 'REMOVE_USER',
  USER_ERROR = 'USER_ERROR',
  UPDATE_DISH = 'UPDATE_DISH',
  SET_CURRENT = 'SET_CURRENT',
  GET_DISHES = 'GET_DISHES',
  DISH_ERROR = 'DISH_ERROR',
  DELETE_DISH = 'DELETE_DISH',
}

export interface EContextBaseAction {
  type: EContextActionTypes;
}
