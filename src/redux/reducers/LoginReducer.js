import { LoginStates } from '../../constants/LoginConstants';

const initialState = {
  username: null,
  userInfo: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  loginTime: null,
  logoutTime: null,
  currentState: 0,
  hasError: false,
  error: null,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        username: action.payload.username,
        // don't store password
        currentState: LoginStates.LOGIN_STATE_LOGGING_IN,
        hasError: false,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentState: LoginStates.LOGIN_STATE_LOGGED_IN,
        userInfo: action.payload.userInfo,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        hasError: false,
        loginTime: new Date(),
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        currentState: LoginStates.LOGIN_STATE_LOGGED_OUT,
        hasError: true,
        error: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        currentState: LoginStates.LOGIN_STATE_LOGGING_OUT,
        hasError: false,
        error: null,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        currentState: LoginStates.LOGIN_STATE_LOGGED_OUT,
        accessToken: null, // forget tokens
        refreshToken: null,
        username: null, // forget username
        userInfo: { name: null, email: null }, // forget everything
        hasError: false,
        logoutTime: new Date(),
      };
    case 'LOGOUT_FAILURE':
      return {
        ...state,
        currentState: LoginStates.LOGIN_STATE_LOGGED_IN,
        // You should look at the error to see what happened.
        hasError: true,
        error: action.payload,
      };
    default:
      return state;
  }
}
