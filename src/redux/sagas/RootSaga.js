import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './LoginSaga';
import { logoutWatcherSaga } from './LogoutSaga';
import { searchOrdersWatcherSaga } from './SearchOrdersSaga'
import { ordersListWatcherSaga } from './OrdersListSaga'
import { homeWatcherSaga } from './HomeSaga'
import { orderDetailWatcherSaga } from './OrderDetailSaga'

export default function* rootSaga() {
  yield all([
    homeWatcherSaga(),
    loginWatcherSaga(), 
    logoutWatcherSaga(),
    searchOrdersWatcherSaga(),
    ordersListWatcherSaga(),
    orderDetailWatcherSaga(),
  ])
}
