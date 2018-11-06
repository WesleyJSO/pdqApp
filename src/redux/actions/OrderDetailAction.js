/**
 * Creates an action for requesting a specific order.
 * @param {*} orderId
 */
export function createOrderDetailRequestAction(orderId) {
  return {
    type: 'ORDER_DETAIL_REQUEST',
    payload: orderId
  }
}

/**
 * Creates an action containing successful order data.
 * @param {*} order
 */
export function createOrderDetailSuccessAction(order) {
  return {
    type: 'ORDER_DETAIL_SUCCESS',
    payload: order
  }
}

/**
 * Creates an action containing a orderDetail error.
 * @param {*} error {code, title, message, etc.}
 */
export function createOrderDetailFailureAction(error) {
  return {
    type: 'ORDER_DETAIL_FAILURE',
    payload: error
  }
}

/**
 * Creates an action to aprove the selected order.
 * @param {*} 
 */
export function createOrderDetailApprovalRequestAction() {
  return {
    type: 'ORDER_DETAIL_APPROVED_REQUEST',
    // payload: orderId
  }
}

/**
 * Creates an action of successful updated request.
 * @param {*} 
 */
export function createOrderDetailApprovalSuccessAction() {
  return {
    type: 'ORDER_DETAIL_APPROVED_SUCCESS',
    payload: ordersList
  }
}
