import { OrderDetailStates } from '../../constants/OrderDetailConstants'
import { ActionSheet } from 'native-base';

const initialState = {
  orders: null,
  currentState: 0,
  hasError: false,
  error: null,
}

export function orderDetailReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_DETAIL_REQUEST':
      return {
        ...state,
        orderId: action.payload.orderId,
        currentState: OrderDetailStates.ORDER_DETAIL_REQUESTED,
        hasError: false,
        error: null
      }
    case 'ORDER_DETAIL_SUCCESS':
      return {
        ...state,
        orderDetail: action.payload.orderDetail,
        currentState: OrderDetailStates.ORDER_DETAIL_SUCCEED,
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
    default:
      return state;
  }
}
