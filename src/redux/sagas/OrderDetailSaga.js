import { takeLatest, call, put } from 'redux-saga/effects'
import { createOrderDetailSuccessAction,
  createOrderDetailApprovalSuccessAction,
  createOrderDetailFailureAction } from '../actions/OrderDetailAction'
 
const url = 'http://10.0.2.2:3000/'

export function *orderDetailWatcherSaga() {
  yield takeLatest('ORDER_DETAIL_REQUEST', searchOrderDetailWorkerSaga)
  yield takeLatest('ORDER_DETAIL_APPROVED_SUCCESS', searchOrderApprovedWorkerSaga)
}

function *searchOrderApprovedWorkerSaga(action) {
  try {
    // const response = yield call(fetch, `${url}pedidos`)
    // const ordersList = yield response.json()
    
    const ordersList = {}
    yield ordersList.pedidos = 
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
    yield put(createOrderDetailApprovalSuccessAction({ ordersList }))
  } catch (err) {
    yield put(createOrderDetailFailureAction(err.response.data))
  }
}

function *searchOrderDetailWorkerSaga(action) {
  try {
    /**
     * Validations should go here
     */
    if(!action.payload || action.payload === 0) {
      throw {
        code: 400,
        response: {
          data: {
            code: 400,
            title: 'Erro durante consulta',
            message: 'Informe o id do item para consulta.'
          },
        }
      }
    } else {
      // const response = yield call(fetch, `${url}pedidos/${action.payload}`)
      // const orderDetail = yield response.json()
      const orderDetail = {}
      yield orderDetail = 
      [
        { id: 1, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'red',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 2, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'steelblue',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 3, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'mediumseagreen',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 4, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'gold',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 5, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'steelblue',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 6, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'mediumseagreen',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 7, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'red',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 8, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'steelblue',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        },
        { id: 9, 
          nomeCliente: 'Muralis', 
          regional: 'REG SP - 1000', 
          ie: '123456789', 
          pedido: 'PN123456789', 
          status: 'EM CONSTRUCAO', 
          data: '01/02/2000',
          orderColor: 'black',
          descricao: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
          previousStatus: 
          [
            {
              date: '02/02/2018 - 20:44:14',
              employee: 'José Roberto',
              status: 'APROVACAO ADM VENDAS',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '04/06/2018 - 12:16:01',
              employee: 'José Wesley',
              status: 'APROVACAO GERENTE REGIONAL',
              obsevations: 'ipsum quia dolor sit amet'
            },
            {
              date: '02/02/2018 - 15:12:14',
              employee: 'Rafael Nakasato',
              status: 'APROVACAO GERENTE COMERCIA',
              obsevations: 'ipsum quia dolor sit amet'
            }  
          ]
        }     
      ]
      for(item in orderDetail) {
        if(item.id === action.payload) {
          yield console.log('INSIDE IF' + item)
          yield orderDetail = item
        }
      }
      yield put(createOrderDetailSuccessAction({ orderDetail }))
    }
  } catch (error) {
    yield put(createOrderDetailFailureAction(error.response.data))
  }
}
