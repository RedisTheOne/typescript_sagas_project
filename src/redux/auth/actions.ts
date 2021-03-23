import { LogInRequestType, SignUpRequestType } from '../../contants/Types';

import { actionTypes } from './reducer';

export const loginRequest = (payload: LogInRequestType) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload
});

export const signupRequest = (payload: SignUpRequestType) => ({
  type: actionTypes.SIGNUP_REQUEST,
  payload
});