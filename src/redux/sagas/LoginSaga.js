import { takeLatest, put } from 'redux-saga/effects';
import {
  createLoginFailureAction,
  createLoginSuccessAction,
} from '../actions/LoginAction';

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_REQUEST', loginWorkerSaga);
}

function* loginWorkerSaga(action) {
  try {
    // pretend to do work for a second
    yield new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    // in practice, you should use:
    // const response = yield someApiCall()

    // do everything with yield; this is running in a background thread
    if (action.payload.username === '' && action.payload.password == '') {
      throw {
        code: 400,
        response: {
          data: {
            code: 400,
            title: 'Erro de autenticação',
            message: 'Use um nome de usuário qualquer para se autenticar.',
          },
        },
      };
    }

    yield put(
      createLoginSuccessAction({
        accessToken: 'abcdef',
        refreshToken: '123456',
        userInfo: {
          name: 'Um Dois Três da Silva Quatro',
          email: '12.3.4@gmail.com',
        },
      })
    );
  } catch (error) {
    // what exactly is in the error object depends on the server
    // but if a response was received at all, it's in error.response
    yield put(createLoginFailureAction(error.response.data));
  }
}
