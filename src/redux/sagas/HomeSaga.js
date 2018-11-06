import { takeEvery, call, put } from 'redux-saga/effects'
import { createHomeFailureAction, createHomeSuccessAction } from '../actions/HomeAction'
import { delay } from 'redux-saga'

 const url = 'http://10.0.2.2:3000/employee'

 export function *homeWatcherSaga() {
  yield takeEvery('HOME_REQUEST', homeWorkerSaga)
 }

 // Never forget to yield EVERYTING in here.
 function *homeWorkerSaga(action) {
   try {
    yield delay(2000)
    // const response = yield call(fetch, url)
    // const data = yield response.json()
    const data = { 
      employee: [
        { value: 'José Wesley' },
        { value: 'Bruno Holanda' },
        { value: 'Davisson Medeiros' },
        { value: 'Naresh Trivedi' },
        { value: 'Zeller' }
      ]
    }
    yield data = data.employee
    yield put(createHomeSuccessAction({ data }))
  } catch (error) {
    yield put(createHomeFailureAction(error.response.data))
  }
}
