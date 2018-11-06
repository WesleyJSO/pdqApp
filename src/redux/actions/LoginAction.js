/**
 * Creates an action for requesting a login.
 * @param {*} loginData {username, password}
 */
export function createLoginRequestAction(loginData) {
  return {
    type: 'LOGIN_REQUEST',
    payload: loginData,
  };
}

/**
 * Creates an action containing successful login information.
 * @param {*} loggedUserInfo {accessToken, refreshToken, etc.}
 */
export function createLoginSuccessAction(loggedUserInfo) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: loggedUserInfo,
  };
}

/**
 * Creates an action containing a login error.
 * @param {*} error {code, title, message, etc.}
 */
export function createLoginFailureAction(error) {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
}

/**
 * Creates an action for requesting a logout.
 */
export function createLogoutRequestAction() {
  return {
    type: 'LOGOUT_REQUEST',
  };
}

/**
 * Creates an action that communicates a successful logout.
 */
export function createLogoutSuccessAction() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}

/**
 * Creates an action containing a logout error.
 * @param {*} error {code, title, message, etc.}
 */
export function createLogoutFailureAction(error) {
  return {
    type: 'LOGOUT_FAILURE',
    payload: error,
  };
}
