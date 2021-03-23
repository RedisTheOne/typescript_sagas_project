import { call, put, takeEvery } from "redux-saga/effects";

import { AuthResponseType } from "../../contants/Types";
import { actionTypes } from "./reducer";
import { postRequest } from "../../helpers/apiUtils";

function* loginReuqest({ payload }: any) {
  const res: AuthResponseType = yield call(postRequest, 'users/login', payload);
  if(res.status) {
    yield put({ type: actionTypes.AUTH_SUCCESSFULLY, payload: res.token });
  } else {
    yield put({ type: actionTypes.AUTH_FAILED, payload: res.msg });
  }
}

function* signupReuqest({ payload }: any) {
  const res: AuthResponseType = yield call(postRequest, 'users/signup', payload);
  if(res.status) {
    yield put({ type: actionTypes.AUTH_SUCCESSFULLY, payload: res.token });
  } else {
    yield put({ type: actionTypes.AUTH_FAILED, payload: res.msg });
  }
}

export default function* root() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginReuqest);
  yield takeEvery(actionTypes.SIGNUP_REQUEST, signupReuqest);
}