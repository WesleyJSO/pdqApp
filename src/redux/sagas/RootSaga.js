import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './LoginSaga';
import { logoutWatcherSaga } from './LogoutSaga';

export default function* rootSaga() {
  yield all([loginWatcherSaga(), logoutWatcherSaga()]);
}
