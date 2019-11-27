type Navlinks = {
  link: Link;
}

type Link = {
  id: string;
  path: string;
  text: string;
}

type IStateDishes = {
  dishes: Dish[];
  error: null;
  loading: boolean;
  flirtedDishes: null;
  current: null;
  addDish: any;
}

type IStateAuth = {
  user: User;
  loading: true;
  isAuth: boolean;
  token: string;
  error: null;
}

type Dish = {
  id: string;
  name: string;
  country: string;
  description: string;
  type: string;
}

type User = {
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
  LOG_OUT = 'LOG_OUT'
}

interface EDishActions {
  type: EContextDishesActions;
}


interface EAuthActions {
  type: EContextAuthActions;
}


type IActionType = {
  type: string;
  payload?: any;
}