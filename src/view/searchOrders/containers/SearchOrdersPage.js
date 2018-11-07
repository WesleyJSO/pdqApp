import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, View, Content, Form, Icon } from 'native-base'
import { StyleSheet, SafeAreaView } from 'react-native'
import { SearchOrdersStates } from '../../../constants/SearchOrdersConstants'
import { createSearchOrdersRequestAction } from '../../../redux/actions/SearchOrdersAction'
import { createSearchOrdersMoveAction } from '../../../redux/actions/SearchOrdersAction'
import _InfoPanel from '../../../components/_InfoPanel'
import _Header from '../../../components/_Header'
import _TextField from '../../../components/_TextField'
import _Dropdown from '../../../components/_Dropdown'
import _Button from '../../../components/_Button'
// import LinearGradient from 'react-native-linear-gradient'
  
class SearchOrdersPage extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Icon 
        type="MaterialCommunityIcons"
        name="book-open"
        style={{ fontSize: 20, color: '#0d4c92'}}
      />
    ),
    title: 'Consultar Pedido'
  }
  /**
   * If you don’t initialize state and you don’t bind methods,
   * you don’t need to implement a constructor for your React component.
   * The constructor for a React component is called before it is mounted.
   * When implementing the constructor for a React.Component subclass,
   * you should call super(props) before any other statement.
   * Otherwise, this.props will be undefined in the constructor,
   * which can lead to bugs.
   */
  constructor(props) {
    super(props)
    this.state = {
      queryData: {},
      initialData: null,
      isWaitingResponse: props.isWaitingResponse,
      lastRequestError: null,
      currentState: null,
      ordersList: null,
    }
  }
  // action hapens every time the props growth
  componentWillReceiveProps(nextProps) {
    this.setState({
      ordersList: nextProps.ordersList,
      initialData: nextProps.initialData,
      isWaitingResponse: nextProps.isWaitingResponse,
      lastRequestError: nextProps.lastRequestError,
      currentState: nextProps.currentState,
    })
  }
  componentDidMount() {
    if(!this.state.initialData) {
      this.props.dispatchSearchOrdersMoveAction()
    }
  }
  componentDidUpdate() {
    if(this.state.currentState === SearchOrdersStates.SEARCH_ORDERS_SUCCEED) {
      this.props.navigation.navigate('OrdersListPage', {ordersList: this.state.ordersList})
    }
  }
  updateEmployee = v => {
    this.setState({ queryData: { ...this.state.queryData, employee: v } })
  }
  updateOrderNumber = v => { 
    this.setState({ queryData: { ...this.state.queryData, orderNumber: v } }) 
  }
  updateRegional = v => { 
    this.setState({ queryData: { ...this.state.queryData, regional: v } }) 
  }
  updateUfState = v => { 
    this.setState({ queryData: { ...this.state.queryData, ufState: v } }) 
  }
  updateCity = v => { 
    this.setState({ queryData: { ...this.state.queryData, city: v } }) 
  }
  updateOrderStatus = v => { 
    this.setState({ queryData: { ...this.state.queryData, orderStatus: v } }) 
  }
  updateFromDate = v => { 
    this.setState({ queryData: { ...this.state.queryData, fromDate: v } }) 
  }
  updateToDate = v => { 
    this.setState({ queryData: { ...this.state.queryData, toDate: v } }) 
  }
  
  searchOrdersRequest() {
    this.props.dispatchSearchOrdersRequestAction(this.state.queryData)
  }

  render() {
    return (
      <Container >
        <_Header 
          title="Consultar Pedido" 
          navigation={this.props.navigation} 
        />
        {/*<LinearGradient colors={['#eee', '#eee', '#eee']} >*/}
        <Content>
          <SafeAreaView>

            <Form style={styles.form}>

              <_TextField
                label='Número do pedido'
                value={this.state.queryData.orderNumber}
                onChangeText={this.updateOrderNumber.bind(this)}
              />
              
              <_Dropdown
                label='RTV'
                data={this.props.initialData && this.props.initialData.employeeList}
                value={this.state.queryData.employee}
                onChangeText={this.updateEmployee.bind(this)}
              />

              <View style={styles.view}>

                <View style={{flex: 0.5, height: 10}}>
                  <_Dropdown
                    label='Estado'
                    data={this.props.initialData && this.props.initialData.stateList}
                    value={this.state.queryData.ufState}
                    onChangeText={this.updateUfState.bind(this)}
                  />
                </View>

                <View style={{flex: 1}}>
                  <_Dropdown
                    label='Cidade'
                    data={this.props.initialData && this.props.initialData.cityList}
                    value={this.state.queryData.city}
                    onChangeText={this.updateCity.bind(this)}
                  />
                </View>
              </View>

              <_Dropdown
                label='Regional'
                data={this.props.initialData && this.props.initialData.regionalList}
                value={this.state.queryData.regional}
                onChangeText={this.updateRegional.bind(this)}
              />
              
              <_Dropdown
                label='Status'
                data={this.props.initialData && this.props.initialData.orderStatusList}
                value={this.state.queryData.orderStatus}
                onChangeText={this.updateOrderStatus.bind(this)}
              />
              
              <_Button
                text={'Consultar'}
                onPress={this.searchOrdersRequest.bind(this)}
              />

              <_InfoPanel
                message={'Houve um erro ao realizar a consulta.'}
                pending={this.state.isWaitingResponse}
                error={this.state.lastRequestError}
              />
                
            </Form>
          </SafeAreaView>
          {/*</LinearGradient>*/}
        </Content>
      </Container>
    )
  }
}

// redux methods
// https://stackoverflow.com/questions/41438106/redux-with-react-native-and-mapstatetoprops
function mapStateToProps(state) {
  return {
    initialData: state.searchOrdersReducer.initialData,
    queryData: state.searchOrdersReducer.queryData,
    ordersList: state.searchOrdersReducer.ordersList,

    hasError: state.searchOrdersReducer.hasError,
    error: state.searchOrdersReducer.error,
    currentState: state.searchOrdersReducer.currentState,
    isWaitingResponse: 
      state.searchOrdersReducer.currentState === SearchOrdersStates.SEARCH_ORDERS_REQUESTED 
      || state.searchOrdersReducer.currentState === SearchOrdersStates.SEARCH_ORDERS_MOVE,
    lastRequestError: state.searchOrdersReducer.hasError ? state.searchOrdersReducer.error : null
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    dispatchSearchOrdersMoveAction: () =>
      dispatch(createSearchOrdersMoveAction()),
    dispatchSearchOrdersRequestAction:(queryData) =>
      dispatch(createSearchOrdersRequestAction(queryData)),
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchOrdersPage)


const styles = StyleSheet.create({
  form: {
    paddingLeft:15,
    paddingRight:15
  },
  view: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
})
