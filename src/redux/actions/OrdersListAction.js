/**
 * Creates an action for requesting searchOrders.
 * @param {*} queryData { rtv, orderNumber, regional, state, city, orderStatus, fromDate, toDate }
 */
export function createOrdersListRequestAction(queryData) {
  console.log(`ORDERS_LIST_REQUEST:${JSON.stringify(queryData)}`)
  return {
    type: 'ORDERS_LIST_REQUEST',
    payload: queryData
  }
}

/**
 * Creates an action containing successful ordersList information.
 * @param {*} ordersList {}
 */
export function createOrdersListSuccessAction(ordersList) {
  console.log(`ORDERS_LIST_SUCCESS:${JSON.stringify(ordersList)}`)
  return {
    type: 'ORDERS_LIST_SUCCESS',
    payload: ordersList
  }
}

/**
 * Creates an action containing a ordersList error.
 * @param {*} error {code, title, message, etc.}
 */
export function createOrdersListFailureAction(error) {
  console.log(`ORDERS_LIST_FAILURE:${JSON.stringify(error)}`)
  return {
    type: 'ORDERS_LIST_FAILURE',
    payload: error
  }
}
