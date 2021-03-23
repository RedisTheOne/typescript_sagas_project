type State = {
  authedSuccessfully: boolean;
  toastMsg: string | null;
  loginTries: number;
};

const initialState: State = {
  authedSuccessfully: false,
  toastMsg: null,
  loginTries: 0
};

export const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  AUTH_FAILED: 'AUTH_FAILED',
  AUTH_SUCCESSFULLY: 'AUTH_SUCCESSFULLY',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
};

const reducer = (state: State = initialState, action: any) => {
  switch(action.type) {
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        toastMsg: action.payload,
        loginTries: state.loginTries + 1
      }
    case actionTypes.AUTH_SUCCESSFULLY:
      localStorage.setItem('TOKEN', action.payload);
      return {
        ...state,
        authedSuccessfully: true
      }
    default:
      return state;
  }
};

export default reducer;