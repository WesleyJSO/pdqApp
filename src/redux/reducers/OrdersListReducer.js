import { OrdersListStates } from '../../constants/OrdersListConstants'

const initialState = {
  orders: null,
  currentState: 0,
  hasError: false,
  error: null,
}

export function ordersListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDERS_LIST_REQUEST':
      return {
        ...state,
        orderId: action.payload.orderId,
        currentState: OrdersListStates.ORDERS_LIST_REQUESTED,
        hasError: false,
        error: null
      }
    case 'ORDERS_LIST_SUCCESS':
      return {
        ...state,
        orderDetail: action.payload,
        currentState: OrdersListStates.ORDERS_LIST_SUCCEED,
        hasError: false,
        error: null
      }
    case 'ORDERS_LIST_FAILURE':
      return {
        ...state,
        currentState: OrdersListStates.ORDERS_LIST_FAILED,
        hasError: true,
        error: action.payload
      }
    default:
      return state;
  }
}
