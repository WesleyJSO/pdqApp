import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer';
import { searchOrdersReducer } from './SearchOrdersReducer'
import { ordersListReducer } from './OrdersListReducer'
import { homeReducer } from './HomeReducer'
import { orderDetailReducer } from './OrderDetailReducer'

export default combineReducers({
  loginReducer: loginReducer,
  searchOrdersReducer: searchOrdersReducer,
  homeReducer: homeReducer,
  ordersListReducer: ordersListReducer,
  orderDetailReducer: orderDetailReducer,
});
