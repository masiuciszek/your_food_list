# Your food list 🥥🥐🍔🍕🍌
#### bad name I know <!--.element: class="fragment" data-fragment-index="1"-->


## Short about the project


### my goals and expectations before the project start
- Be more comfortable working with databases <!--.element: class="fragment" data-fragment-index="1"-->
- Learning Typescript  <!--.element: class="fragment" data-fragment-index="2"-->
- Build a fullstack MERN application , with TS <!--.element: class="fragment" data-fragment-index="3"-->
- Learn as much as possible and at least finish until my own deadline <!--.element: class="fragment" data-fragment-index="4"-->



### Tools I used on the backend
1. Node Js <!--.element: class="fragment" data-fragment-index="1"-->
2. Express JS <!--.element: class="fragment" data-fragment-index="2"-->
3. Mongo db <!--.element: class="fragment" data-fragment-index="3"-->
4. Express validator <!--.element: class="fragment" data-fragment-index="4"-->
5. Json web token <!--.element: class="fragment" data-fragment-index="5"-->
6. Bcrypt js (for hashing user passwords ) <!--.element: class="fragment" data-fragment-index="6"-->


### Tools I used on the front end
1. React js ⚛️ ℷ <!--.element: class="fragment" data-fragment-index="1"-->
2. Context Api ℷ (Built in React, Redux) <!--.element: class="fragment" data-fragment-index="2"-->
3. Styled Components(Ts) 🥇 <!--.element: class="fragment" data-fragment-index="3"-->
4. Typescript <!--.element: class="fragment" data-fragment-index="4"-->


### Typescript is .....
![alt text](https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif "Logo Title Text 1")



### Hardest part and my explanation:
1.  2 different front end versions, JS and TS <!--.element: class="fragment" data-fragment-index="1"-->
2. TS vs JS <!--.element: class="fragment" data-fragment-index="2"-->
3. local storage  <!--.element: class="fragment" data-fragment-index="3"-->
4. TS types (More complex then you think) <!--.element: class="fragment" data-fragment-index="4"-->



### Some TS tips
1. Don't over use the any type <!--.element: class="fragment" data-fragment-index="1"-->
2. Why? 🤷🏿‍♂️ <!--.element: class="fragment" data-fragment-index="2"-->
3. Use Global Custom types 💪🏻 <!--.element: class="fragment" data-fragment-index="3"-->


### Things I learned
1. Creating a MERN application <!--.element: class="fragment" data-fragment-index="1"-->
2. working with Typescript <!--.element: class="fragment" data-fragment-index="2"-->
3. Searching deeply for info <!--.element: class="fragment" data-fragment-index="3"-->
4. Working with Mongo DB <!--.element: class="fragment" data-fragment-index="4"-->


### Code Examples 🤟🏻 λ
##### TS Global types <!--.element: class="fragment" data-fragment-index="1"-->

```typescript
export type IStateDishes = {
  dishes: Dish[];
  error: null;
  loading: boolean;
  flirtedDishes: Dish[] | null;
  current: Dish;
  addDish: Dish;
  deleteDish: () => void;
  setCurrent: Dish;
  updateDish: Dish;
  searchDish: string;
  clearFilter: () => void;
  getDishes: () => void;
  clearCurrent: () => void;
}
```


```typescript
export type Dish = {
  _id: string;
  name: string;
  country: string;
  description: string;
  type: string;
  user: User;
}
```


```typescript
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
```


#### Context API State

```typescript
/* eslint-disable no-undef */
import * as React from 'react';
import axios from 'axios';
import { IStateAuth, User } from '../../types';
import authReducer from './auth.reducer';
import contextActions from '../contextTypes';
import setAuthToken from '../../utils/setAuthToken';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const initialState: IStateAuth = {
  isAuth: false,
  loading: true,
  user: null,
  token: localStorage.getItem('token'),
  error: null,
};

export const authContext = React.createContext<IStateAuth>(initialState);

const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/auth');
      dispatch({
        type: contextActions.auth.LOAD_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: contextActions.auth.AUTH_ERROR,
      });
    }
  };

```


### If I had a time machine
- Planing my work even better <!--.element: class="fragment" data-fragment-index="1"-->
- making the application event more complex <!--.element: class="fragment" data-fragment-index="2"-->


### How could I develop the app
- Making it more complex and advanced <!--.element: class="fragment" data-fragment-index="1"-->
- Converting it to a some kind of E-shop ...maybe 🤨 <!--.element: class="fragment" data-fragment-index="2"-->
- Adding another database schema  <!--.element: class="fragment" data-fragment-index="3"-->


### Thank you all ✌🏼☮️☮🕊
![alt text](https://media.giphy.com/media/3oKIPf1BaBDILVxbYA/giphy.gif "Done")
