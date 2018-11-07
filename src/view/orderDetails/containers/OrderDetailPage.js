import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Container, Content } from 'native-base'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton } from 'react-native-material-cards'
import Modal from "react-native-modal"
import { createOrderDetailApprovalRequestAction } from '../../../redux/actions/OrderDetailAction'
import _Button from '../../../components/_Button'
import _Header from '../../../components/_Header'

class OrderDetailPage extends Component {
  
  static navigationOptions = {
    title: 'Detalhes do Pedido',
  }
  constructor(props) {
    super(props)
    this.state = {
      action: '',
      visibleModal: false,
      orderDetail: {},
      isWaitingResponse: props.isWaitingResponse,
      lastRequestError: null
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isWaitingResponse: nextProps.isWaitingResponse,
      lastRequestError: nextProps.lastRequestError,
    })
  }
  aprove() {
    this.upadateAction('aprovado')
    this.updatateModalVisibity()
  }
  reprove() {
    this.upadateAction('reprovado')
    this.updatateModalVisibity()
  }
  cancel() {
    this.upadateAction('cancelado')
    this.updatateModalVisibity()
  }
  updateModalSuccess = () => {
    this.updatateModalVisibity()
    this.props.dispatchOrderDetailApprovalAction()
    this.props.navigation.navigate('OrdersListPage', { updatedOrderStatus: this.state.action })

  }
  componentDidMount() {
    this.setState({ orderDetail: this.props.navigation.getParam('orderDetail', '')})
  }
  updatateModalVisibity = () => this.setState({ visibleModal: !this.state.visibleModal })
  upadateAction = v => this.setState({ action: v })

  render() {
    var orderDetail = this.state.orderDetail
    return (
      <Container>
        <_Header
          title={'Detalhes do Pedido'}
          navigation={this.props.navigation}
        />
        <Content>
          <View style={styles.container}>
            <Modal
              isVisible={this.state.visibleModal === true}
              animationIn={'slideInDown'}
              animationOut={'slideOutDown'}
              animationInTiming={500}
              animationOutTiming={500}
            >
              <View style={styles.modalContent}>
                <Text>Ao confirmar o pedido {orderDetail.pedido} será {this.state.action}, deseja conntinuar?</Text>
                <View style={styles.modalButtons}>
                  <_Button 
                    text={'Sim'}
                    onPress={this.updateModalSuccess.bind(this)}
                  />
                  <_Button 
                    text={'Não'}
                    backgroundColor={'red'}
                    onPress={this.updatateModalVisibity.bind(this)}
                  />
                </View>
              </View>
            </Modal>
          </View>
          <SafeAreaView>
            
            <Card style={styles.card}>
              <View style={styles.viewCardTitle}>
                <CardTitle 
                  fontSize={20}
                  title={`${orderDetail.nomeCliente}`} 
                  subtitle={`${orderDetail.pedido} - ${orderDetail.status}`}
                />
                <View style={[styles.orderColor, orderDetail.orderColor && { backgroundColor: `${orderDetail.orderColor}` }]} />
              </View>
              <CardContent 
                text={`Data de criação do pedido: ${orderDetail.data}\nIE: ${orderDetail.ie}\nRegional: ${orderDetail.regional}\nDescrição: ${orderDetail.descricao}`}
              />
              <CardAction 
                style={{justifyContent: 'space-between'}}
                separator={true} 
                inColumn={false}
              >
                <CardButton
                  onPress={this.aprove.bind(this)}
                  title="Aprovar"
                  color="blue"
                />
                <CardButton
                  onPress={this.reprove.bind(this)}
                  title="Reprovar"
                  color="#d1a827"
                />
                <CardButton
                  onPress={this.cancel.bind(this)}
                  title="Cancelar"
                  color="red"
                />
              </CardAction>
            </Card>

            {/* card to show data from previous status */}
            {
              orderDetail.previousStatus &&
              <Text style={{paddingTop: 15, marginLeft: 15, fontSize: 20}}>Histórico de status do pedido</Text>
            }
            {
              orderDetail.previousStatus &&
              orderDetail.previousStatus.map((v, k) => {
                return (
                  <Card key={k} style={styles.card}>
                    <View style={styles.viewCardTitle}>
                      <CardTitle style={styles.cardTitle}
                        title={`${v.status}`}
                        fontSize={17}

                        subtitle={`Data da alteração: ${v.date}`}
                      />
                    </View>
                    <CardContent
                      text={ v.obsevations && `Observações: ${v.obsevations}` }
                    />
                    <CardAction 
                      separator={true}
                      inColumn={false}
                    ><Text style={styles.status}>Usuário: {v.employee}</Text>
                    </CardAction>
                  </Card>
                )
              })
            }
          </SafeAreaView>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    hasError: state.orderDetailReducer.hasError,
    errror: state.orderDetailReducer.errror,
    isWaitingResponse: state.orderDetailReducer.isWaitingResponse,
    lastRequestError: state.orderDetailReducer.lastRequestError,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // options to aprove and reprove a order
     dispatchOrderDetailApprovalAction: () =>
       dispatch(createOrderDetailApprovalRequestAction()),
    
    // dispatchOrderReprovalAction: orderId =>
    //   dispatch(createOrderReprovalRequestAction(orderId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailPage)


const styles = StyleSheet.create({
  card: {
    borderWidth: 0.2,
    borderColor: '#898a89',
    elevation: 5,
    backgroundColor: '#fdfdfd',
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  viewCardTitle: {
    flex: 1, 
    flexDirection: 'row',
  },
  cardTitle: {
  },
  orderColor: {
    width: 50,
    height: 50,
    borderRadius: 100/2,
    margin: 15,
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    fontSize: 13,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})
