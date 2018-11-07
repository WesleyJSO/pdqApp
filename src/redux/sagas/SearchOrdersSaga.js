import { takeLatest, put,  } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { createSearchOrdersFailureAction, 
  createSearchOrdersMoveSuccessAction ,
  createSearchOrdersSuccessAction,
} from '../actions/SearchOrdersAction'
 /**
  * For more info to this url
  * https://github.com/typicode/json-server
  * Android localhost === 10.0.2.2
  */
const url = 'http://10.0.2.2:3000/'

export function *searchOrdersWatcherSaga() { 
  yield takeLatest('SEARCH_ORDERS_MOVE', homeWorkerSaga),
  yield takeLatest('SEARCH_ORDERS_REQUEST', searchOrdersListWorkerSaga)
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

function *searchOrdersListWorkerSaga(action) {
  try {
    /**
     * Validations should go here
     */
    yield delay(2000)
    if(Object.keys(action.payload).length === 0 && action.payload.constructor === Object) {
      throw {
        code: 400,
        response: {
          data: {
            code: 400,
            title: 'Erro durante consulta',
            message: 'Preencha pelo menos um dos campos para realizar a consulta.'
          },
        }
      }
    } else {
      // const response = yield call(fetch, `${url}pedidos`)
      // const ordersList = yield response.json()
      const ordersList = {}
      yield ordersList = 
      [
        {
          id: 1,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "red",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 2,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "steelblue",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 3,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "mediumseagreen",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 4,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "gold",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 5,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "steelblue",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 6,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "mediumseagreen",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 7,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "red",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 8,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "steelblue",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        },
        {
          id: 9,
          nomeCliente: "Muralis",
          regional: "REG SP - 1000",
          ie: "123456789",
          pedido: "PN123456789",
          status: "EM CONSTRUCAO",
          data: "01/02/2000",
          orderColor: "black",
          descricao: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          previousStatus: [
            {
              date: "02/02/2018 - 20:44:14",
              employee: "José Roberto",
              status: "APROVACAO ADM VENDAS",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "04/06/2018 - 12:16:01",
              employee: "José Wesley",
              status: "APROVACAO GERENTE REGIONAL",
              obsevations: "ipsum quia dolor sit amet"
            },
            {
              date: "02/02/2018 - 15:12:14",
              employee: "Rafael Nakasato",
              status: "APROVACAO GERENTE COMERCIA",
              obsevations: "ipsum quia dolor sit amet"
            }
          ]
        }
      ]
      yield put(createSearchOrdersSuccessAction(ordersList))
    }
  } catch (error) {
    yield put(createSearchOrdersFailureAction(error.response.data))
  }
}
