type IAction = {
  type: string;
  payload?: any;
}

type IStateUsers = {
  users: User[];
  loading: boolean;
  error: null;
  isAuth: boolean;
  user: null;
  token: string | null;
}

type IStateAlerts = {
  alerts: string[] = [];
}


type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

type FormDataLogin = {
  email: string;
  password: string;
}


type ThemeValues = {
  blackish: string;
  primary: string;
  secondary: string;
  darkish: string;
  dark: string;
  black: string;
  grey: string;
  white: string;
  maxWidth: string;
  bs: string;
  primaryShadow: string;
  offWhite2: string;
  darkGrey: string;
  mainTransition: string;
  secondaryTransition: string;
  quickTransition: string;
  mainSpacing: string;
  lightShadow: string;
  darkShadow: string;
}

type NavigationTypes = {
  text: string;
  path: string;
}
