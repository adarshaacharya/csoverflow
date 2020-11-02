import { Dispatch } from 'redux';
import Api from 'store/api';
import { setError } from '../errors/errors.action';
import {
  AuthActions,
  AUTH_ERROR,
  ISignupData,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from './auth.types';

// load user after signin on every page render to check if user has been authorized with jwt
// put the token in global header from localstorage (if there's any) so auth middleware will check
// if there is any (x-auth-token) in req.header
export const loadUser = () => async (dispatch: Dispatch<AuthActions>) => {
  try {
    const {
      data: { user },
    } = await Api.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const registerUser = (formData: ISignupData) => async (dispatch: Dispatch<AuthActions>) => {
  try {
    const {
      data: { token },
    } = await Api.post('/users', formData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: token,
    });
    dispatch<any>(loadUser());
  } catch (error) {
    const err = error.response.data.error;
    dispatch<any>(setError(err));
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const logOut = () => async (dispatch: Dispatch<AuthActions>) => {
  dispatch({
    type: LOGOUT,
  });
};
