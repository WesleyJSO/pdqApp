/**
 * Creates an action for requesting ordersList screen.
 * @param {*}
 */
export function createHomeLoadCombosRequestAction() {
  return {
    type: 'HOME_REQUEST'
  }
}

/**
 * Creates an action containing successful home information.
 * @param {*} homeInfo {}
 */
export function createHomeSuccessAction(homeInfo) {
  return {
    type: 'HOME_SUCCESS',
    payload: homeInfo,
  };
}

/**
 * Creates an action containing a home error.
 * @param {*} error {code, title, message, etc.}
 */
export function createHomeFailureAction(error) {
  return {
    type: 'HOME_FAILURE',
    payload: error
  }
}
