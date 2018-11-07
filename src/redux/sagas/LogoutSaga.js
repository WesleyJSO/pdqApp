import { takeLatest, put } from 'redux-saga/effects';
import {
  createLogoutFailureAction,
  createLogoutSuccessAction,
} from '../actions/LoginAction';

export function* logoutWatcherSaga() {
  yield takeLatest('LOGOUT_REQUEST', logoutWorkerSaga);
}

function* logoutWorkerSaga() {
  try {
    yield new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    yield put(createLogoutSuccessAction());
  } catch (error) {
    yield put(createLogoutFailureAction(error.response.data));
  }
}
