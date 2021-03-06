import { string } from 'prop-types';

type Navlinks = {
  link: Link;
}

type Link = {
  id: string;
  path: string;
  text: string;
}

export type IStateDishes = {
  dishes: Dish[];
  error: null;
  loading: boolean;
  flirtedDishes: Dish[] | null;
  current: Dish;
  addDish: any;
  deleteDish: any;
  setCurrent: any;
  updateDish: any;
  searchDish: any;
  clearFilter: () => void;
  getDishes: () => void;
  clearCurrent: () => void;
}

type IStateAuth = {
  user: User | null;
  loading: boolean;
  error: null;
  isAuth: boolean;
  user: null;
  token: string | null;
  loadUser: any;
  register: any;
  logout: () => void;
  login: any;
  deleteProfile: () => void;
  serverLogout: () => void;
}

export type Dish = {
  _id: string;
  name: string;
  country: string;
  description: string;
  type: string;
  user: User;
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

enum EContextDishesActions {
  SET_LOADING = 'SET_LOADING',
  ADD_DISH = 'ADD_DISH',
  UPDATE_DISH = 'UPDATE_DISH',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
  GET_DISHES = 'GET_DISHES',
  DISH_ERROR = 'DISH_ERROR',
  DELETE_DISH = 'DELETE_DISH',
  REGISTER_FAIL = 'REGISTER_FAIL',
  REMOVE_ALERT = 'REMOVE_ALERT',
  SET_ALERT = 'SET_ALERT',
  CLEAR_FILTER = 'CLEAR_FILTER',
  CLEAR_DISHES = 'CLEAR_DISHES',
}

enum EContextAuthActions {
  SET_LOADING = 'SET_LOADING',
  REGISTER_USER = 'REGISTER_USER',
  GET_USERS = 'GET_USERS',
  REMOVE_USER = 'REMOVE_USER',
  USER_ERROR = 'USER_ERROR',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
  AUTH_ERROR = 'AUTH_ERROR',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOAD_USER = 'LOAD_USER',
  LOGIN = 'LOGIN',
  REGISTER_FAIL = 'REGISTER_FAIL',
  REMOVE_ALERT = 'REMOVE_ALERT',
  SET_ALERT = 'SET_ALERT',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  LOG_OUT = 'LOG_OUT',

}

export interface EDishActions {
  type: EContextDishesActions;
}


export interface EAuthActions {
  type: EContextAuthActions;
}


export type IActionType = {
  type: string;
  payload?: any;
}

export interface DefaultActionsTypes {
  dishes: {
    GET_DISHES: string;
    DELETE_DISH: string;
    SET_CURRENT: string;
    CLEAR_CURRENT: string;
    ADD_DISH: string;
    UPDATE_DISH: string;
    SEARCH_DISHES: string;
    CLEAR_FILTER: string;
    DISH_ERROR: string;
  };
  auth: {
    SET_LOADING: string;
    REGISTER_USER: string;
    GET_USERS: string;
    REMOVE_USER: string;
    USER_ERROR: string;
    SET_CURRENT: string;
    CLEAR_CURRENT: string;
    AUTH_ERROR: string;
    LOGIN_FAIL: string;
    LOAD_USER: string;
    LOGIN: string;
    REGISTER_FAIL: string;
    REMOVE_ALERT: string;
    SET_ALERT: string;
    REGISTER_SUCCESS: string;
    LOG_OUT: string;
    SERVER_LOGOUT: string;
    SERVER_ERROR: string;
  };
}
