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
 * Creates an action containing successful searchOrders information.
 * @param {*} employeeList {id, nomeFuncionario.}
 */
export function createSearchOrdersSuccessAction() {
  console.log(`createSearchOrdersSuccessAction in SearchOrderAction`)
  return {
    type: 'SEARCH_ORDERS_SUCCESS'
  }
}

/**
 * Creates an action containing a searchOrders error.
 * @param {*} error {code, title, message, etc.}
 */
export function createSearchOrdersFailureAction(error) {
  console.log(`Creating search order failure action in SearchOrderAction with error:${JSON.stringify(error)}`)
  return {
    type: 'SEARCH_ORDERS_FAILURE',
    payload: error
  }
}
