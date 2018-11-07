import { SearchOrdersStates } from '../../constants/SearchOrdersConstants'

const initialState = {
  rtv: null,
  orderNumber: null,
  currentState: 0,
  hasError: false,
  error: null,
}

export function searchOrdersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_ORDERS_MOVE':
      return {
        ...state,
        currentState: SearchOrdersStates.SEARCH_ORDERS_MOVE,
        hasError: false,
        error: null
      }
    case 'SEARCH_ORDERS_MOVE_SUCCESS':
      return {
        ...state,
        initialData: action.payload,
        currentState: SearchOrdersStates.SEARCH_ORDERS_MOVE_SUCCESS,
        hasError: false,
        error: null
      }
    /**
     * Store values to search for orders
     */
    case 'SEARCH_ORDERS_REQUEST':
      return {
      ...state,
        queryData: action.payload.queryData,
        currentState: SearchOrdersStates.SEARCH_ORDERS_REQUESTED,
        hasError: false,
        error: null
      }
    /**
     * Orders requested and return something
     */
    case 'SEARCH_ORDERS_SUCCESS':
      return {
        ...state,
        ordersList: action.payload,
        currentState: SearchOrdersStates.SEARCH_ORDERS_SUCCEED,
        hasError: false,
        error: null
      }
    /**
     * Error while validating or in requesting data
     */
    case 'SEARCH_ORDERS_FAILURE':
      return {
        ...state,
        currentState: SearchOrdersStates.SEARCH_ORDERS_FAILED,
        hasError: true,
        error: action.payload
      }
    default:
      return state;
  }
}
