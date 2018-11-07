/**
 * Creates an action for requesting searchOrders.
 * @param {*} orderId
 */
export function createOrdersListRequestAction(orderId) {
  return {
    type: 'ORDERS_LIST_REQUEST',
    payload: orderId
  }
}

/**
 * Creates an action containing successful orderDetail information.
 * @param {*} orderDetail {}
 */
export function createOrdersListSuccessAction(orderDetail) {
  return {
    type: 'ORDERS_LIST_SUCCESS',
    payload: orderDetail
  }
}

/**
 * Creates an action containing a ordersList error.
 * @param {*} error {code, title, message, etc.}
 */
export function createOrdersListFailureAction(error) {
  return {
    type: 'ORDERS_LIST_FAILURE',
    payload: error
  }
}
