import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, View, Content, Text } from 'native-base'
import { TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { OrdersListStates } from '../../../constants/OrdersListConstants'
import _InfoPanel from '../../../components/_InfoPanel'
import _Header from '../../../components/_Header'
import _Button from '../../../components/_Button'
import Modal from "react-native-modal"
import { createOrderDetailRequestAction } from '../../../redux/actions/OrderDetailAction'
import { ListItem } from 'react-native-elements'

class OrdersListPage extends Component {
  static navigationOptions = {
    title: 'Lista de Pedidos'
  }
  constructor(props) {
    super(props)
    this.state = {
      visibleModal: false,
      ordersList: props.ordersList,
      isWaitingResponse: props.isWaitingResponse,
      lastRequestError: null
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ordersList: nextProps.ordersList,
      isWaitingResponse: nextProps.isWaitingResponse,
      lastRequestError: nextProps.lastRequestError
    })
  }

  componentDidMount() {
    let updatedOrderStatus = this.props.navigation.getParam('updatedOrderStatus', '')
    if(updatedOrderStatus !== '') this.setState({ visibleModal: !this.state.visibleModal })
  }
  
  updatateModalVisibity = () => this.setState({ visibleModal: !this.state.visibleModal })

  onPressItem (itemId) {
    this.props.dispatchOrderDetailsAction(itemId)
    this.props.navigation.navigate('OrderDetailPage')
  }
  render () {
    const updatedOrderStatus = this.props.navigation.getParam('updatedOrderStatus', '')
    return (
      <Container>
        <_Header
          title={'Lista de Pedidos'}
          navigation={this.props.navigation}
        />
        <Content>
          <_InfoPanel
            pending={this.state.isWaitingResponse}
            error={this.state.lastRequestError}
          />
          <View style={styles.container}>
            <Modal
              isVisible={this.state.visibleModal === true}
              animationIn={'slideInDown'}
              animationOut={'slideOutDown'}
              animationInTiming={500}
              animationOutTiming={500}
            >
              <View style={styles.modalContent}>
                <Text>O pedido foi {updatedOrderStatus} com sucesso!</Text>
                <View style={styles.modalButtons}>
                  <_Button 
                    text={'OK'}
                    onPress={this.updatateModalVisibity.bind(this)}
                  />
                </View>
              </View>
            </Modal>
          </View>
          <SafeAreaView>
            <View>
              <FlatList
                style={styles.flatList}
                data={this.state.ordersList}
                renderItem={({item}) => 
                  <TouchableOpacity onPress={() => this.onPressItem(item.id)}>
                    <View style={styles.viewFlatListItem}>
                      <View style={styles.leftInfo}>

                        <Text style={styles.lefIntoUpper}>
                          {item.pedido}
                        </Text>
                      
                        <Text style={styles.leftInfoLower}>
                          {item.status}
                        </Text>

                      </View>
                      <View style={styles.rightInfo}>
                        
                        <View style={styles.rightInfoHeader}>
                          <Text>
                            {item.nomeCliente}
                          </Text>
                          <View style={[styles.orderColor,{ backgroundColor: `${item.orderColor}` }]} />
                        </View>
                        <Text style={styles.rightInfoRegional}>
                          {item.regional}
                        </Text>

                        <Text style={styles.rightInfoDescription}>
                          {item.descricao}
                        </Text>
                        
                      </View>
                    </View>
                  </TouchableOpacity>
                }
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </SafeAreaView>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    ordersList: state.ordersListReducer.ordersList,
    
    hasError: state.ordersListReducer.hasError,
    error: state.ordersListReducer.error,
    isWaitingResponse: state.ordersListReducer.currentState === OrdersListStates.ORDERS_LIST_REQUESTED,
    lastRequestError: state.ordersListReducer.hasError ? state.ordersListReducer.error : null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchOrderDetailsAction:(orderId) =>
      dispatch(createOrderDetailRequestAction(orderId)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersListPage);

const styles = StyleSheet.create({
  flatList: {
    flex: 1
  },
  viewFlatListItem: {
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: '#898a89',
    elevation: 5,
    backgroundColor: '#fdfdfd',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  leftInfo: {
    flex: 1,
    margin: 5,
  },
  leftInfoUpper: {
  },
  leftInfoLower: {
  },
  rightInfo: {
    flex: 2,
    margin: 5,
  },
  rightInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightInfoRegional: {
  },
  rightInfoDescription: {
  },
  orderColor: {
    width: 25,
    height: 25,
    borderRadius: 100/2,
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
