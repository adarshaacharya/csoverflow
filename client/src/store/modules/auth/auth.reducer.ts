import {
  AuthActions,
  AuthState,
  AUTH_ERROR,
  LOGIN_SUCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  SET_LOADING,
  USER_LOADED,
} from './auth.types';

const initialState: AuthState = {
  token: localStorage.getItem('cstoken'),
  isAuthenticated: null,
  loading: false,
  user: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload, // token will be set on local storage by create-store.ts subscription listener
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_SUCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
