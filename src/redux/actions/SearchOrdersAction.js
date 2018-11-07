/**
 * Initial state of the page, load initial data
 */
export function createSearchOrdersMoveAction() {
  return {
    type: 'SEARCH_ORDERS_MOVE'
  }
}

/**
 * Initial data fecth success
 * @param {*} initialData { employeeList, regionalList, stateList, cityList, orderStatusList }
 */
export function createSearchOrdersMoveSuccessAction(initialData) {
  return {
    type: 'SEARCH_ORDERS_MOVE_SUCCESS',
    payload: initialData
  }
}

/**
 * Creates an action for requesting searchOrders.
 * @param {*} queryData { rtv, orderNumber, regional, state, city, orderStatus, fromDate, toDate }
 */
export function createSearchOrdersRequestAction(queryData) {
  return {
    type: 'SEARCH_ORDERS_REQUEST',
    payload: queryData
  }
}

/**
 * Creates an action for requesting searchOrders.
 * @param {*} queryData { rtv, orderNumber, regional, state, city, orderStatus, fromDate, toDate }
 */
export function createSearchOrdersSuccessAction(ordersList) {
  return {
    type: 'SEARCH_ORDERS_SUCCESS',
    payload: ordersList
  }
}

/**
 * Creates an action containing a searchOrders error.
 * @param {*} error {code, title, message, etc.}
 */
export function createSearchOrdersFailureAction(error) {
  return {
    type: 'SEARCH_ORDERS_FAILURE',
    payload: error
  }
}
