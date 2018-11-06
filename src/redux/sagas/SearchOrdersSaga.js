import { takeLatest, call, put,  } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { createSearchOrdersFailureAction, 
  createSearchOrdersMoveSuccessAction } from '../actions/SearchOrdersAction'

 /**
  * For more info to this url
  * https://github.com/typicode/json-server
  * Android localhost === 10.0.2.2
  */
const url = 'http://10.0.2.2:3000/'

export function *searchOrdersWatcherSaga() { 
  yield takeLatest('SEARCH_ORDERS_MOVE', homeWorkerSaga)
}

// Never forget to yield EVERYTING in here.
function *homeWorkerSaga(action) {
  try {
    yield delay(3000)
    var initialData = {}
    // var response = yield call(fetch, `${url}employee`)
    // initialData.employeeList = yield response.json()
    // response = yield call(fetch, `${url}regional`)
    // initialData.regionalList = yield response.json()
    // response = yield call(fetch, `${url}state`)
    // initialData.stateList = yield response.json()
    // response = yield call(fetch, `${url}city`)
    // initialData.cityList = yield response.json()
    // response = yield call(fetch, `${url}orderStatus`)
    // initialData.orderStatusList = yield response.json()
    yield initialData = {
      employeeList: [
        { value: "José Wesley" },
        { value: "Bruno Holanda" },
        { value: "Davisson Medeiros" },
        { value: "Naresh Trivedi" },
        { value: "JoZeller" }
      ],
      regionalList: [
        { value : "REG SC - 1031" },
        { value : "REG SUL DO RS - 1021" },
        { value : "REG MT/RO - 1008" },
        { value : "REG MT/SUL - 1026" },
        { value : "REG MT/SUL - 1026" }
      ],
      stateList: [
        { value: "SP" },
        { value: "RJ" },
        { value: "MT" },
        { value: "SC" },
        { value: "MG" }
      ],
      cityList: [
        { value: "São Paulo" },
        { value: "Mogi das Cruzes" },
        { value: "São José dos Campos" },
        { value: "Rio de Janeiro" },
        { value: "Suzano" }
      ],
      orderStatusList: [
        { value: "Em Construção" },
        { value: "Cancelado" },
        { value: "Aprovação ADM" },
        { value: "Reprovado" },
        { value: "Implantado" }
      ],
    }
    yield put(createSearchOrdersMoveSuccessAction(initialData))
  } catch (error) {
    yield put(createSearchOrdersFailureAction(error.response.data))
  }
}
