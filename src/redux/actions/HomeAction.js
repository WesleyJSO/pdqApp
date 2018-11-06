/**
 * Creates an action for requesting ordersList screen.
 * @param {*}
 */
export function createHomeLoadCombosRequestAction() {
  console.log(`Creating home load combos request action in HomeAction`)
  return {
    type: 'HOME_REQUEST'
  }
}

/**
 * Creates an action containing successful home information.
 * @param {*} homeInfo {}
 */
export function createHomeSuccessAction(homeInfo) {
  console.log(`Creating Home success action in HomeAction with homeInfo: ${JSON.stringify(homeInfo)}`)
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
  console.log(`Creating home failure action in HomeAction with error: ${JSON.stringify(error)}`)
  return {
    type: 'HOME_FAILURE',
    payload: error
  }
}
