import { OrderDetailStates } from '../../constants/OrderDetailConstants'

const initialState = {
  orders: null,
  currentState: 0,
  hasError: false,
  error: null,
}

export function orderDetailReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_DETAIL_APPROVED_REQUEST':
      return {
        ...state,
        currentState: OrderDetailStates.ORDER_DETAIL_APPROVED_REQUEST,
        hasError: false,
          error: null
      }
    case 'ORDER_DETAIL_APPROVED_REQUEST':
      return {
        ...state,
        ordersList: action.payload.ordersList,
        currentState: OrderDetailStates.ORDER_DETAIL_APPROVED_SUCCESS,
        hasError: false,
        error: null
      }
    case 'ORDER_DETAIL_FAILURE':
      return {
        ...state,
        currentState: OrderDetailStates.ORDER_DETAIL_FAILED,
        hasError: true,
        error: action.payload
      }
    default:
      return state;
  }
}
