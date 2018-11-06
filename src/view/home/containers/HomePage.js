// importing React is necessary for jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, List, ListItem, Icon, Left, Body,  Right, View } from 'native-base';
import { Platform, ScrollView } from 'react-native';
import { createLogoutRequestAction } from '../../../redux/actions/LoginAction';
import { LoginStates } from '../../../constants/LoginConstants';
import Config from 'react-native-config';
import { HomeStates } from '../../../constants/HomeConstants'
import { createSearchOrdersMoveAction } from '../../../redux/actions/SearchOrdersAction'
import InfoPanel from '../../login/components/InfoPanel'
import _Header from '../../../components/_Header'

class HomePage extends Component {
  static navigationOptions = {
    title: 'Página Inicial',
  };

  constructor(props) {
    console.log(`HomePage constructor props: ${JSON.stringify(props)}`)
    super(props);
    this.state = {
      isLoggingOut:
        props.currentState === LoginStates.LOGIN_STATE_LOGGING_OUT,
        isWaitingResponse: props.isWaitingResponse,
        lastRequestError: null
    };
  }

  
  componentWillReceiveProps(nextProps) {
    console.log(`componentWillReceiveProps at HomePage nextProps: ${JSON.stringify(this.nextProps)}`)
    this.setState({
      isWaitingResponse: nextProps.isWaitingResponse,
      isLoggingOut: nextProps.currentState === LoginStates.LOGIN_STATE_LOGGING_OUT,
      lastRequestError: nextProps.lastRequestError
    });
  }
  
  dispatchSearchOrdersMoveAction() {
    this.props.dispatchSearchOrdersMoveAction()
    this.props.navigation.navigate('SearchOrdersPage')
  }

  goToAbout() {
    this.props.navigation.navigate('AboutPage' /* You can also pass props here */);
  }

  logout() {
    this.props.dispatch(createLogoutRequestAction());
  }

  render() {
    return (
      <View>
        <_Header
          title={'Lista de Pedidos'}
          navigation={this.props.navigation}
        />
        <ScrollView style={{ margin: 5 }}>
          <List>
            <ListItem icon onPress={this.dispatchSearchOrdersMoveAction.bind(this)}>
              <Left>
                <View style={styles.view}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="book-variant"
                    style={{ fontSize: 24, color: Config.secondaryColorText }}
                  />
                </View>
              </Left>
              <Body>
                <Text>Consulta de pedidos</Text>
              </Body>
              {Platform.OS === 'ios' && (
                <Right>
                  <Icon type="Ionicons" name="ios-arrow-forward" />
                </Right>
              )}
            </ListItem>
            {/* <ListItem icon onPress={this.goToAbout.bind(this)}>
              <Left>
                <View style={styles.view}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="information"
                    style={{ fontSize: 24, color: Config.secondaryColorText }}
                  />
                </View>
              </Left>
              <Body>
                <Text>Sobre</Text>
              </Body>
              {Platform.OS === 'ios' && (
                <Right>
                  <Icon type="Ionicons" name="ios-arrow-forward" />
                </Right>
              )}
            </ListItem> */}
            <ListItem icon onPress={this.logout.bind(this)}>
              <Left>
                <View style={styles.view}>
                  {/* Look for icons:
                  https://github.com/GeekyAnts/NativeBase-VectorIconApp/tree/master/src/icon-list */}
                  <Icon
                    type="MaterialCommunityIcons"
                    name="logout"
                    style={{
                      fontSize: 24,
                      color: Config.secondaryColorText,
                    }}
                  />
                </View>
              </Left>
              <Body>
                <Text>{this.state.isLoggingOut ? 'Saindo...' : 'Sair'}</Text>
              </Body>
            </ListItem>
          </List>

          <InfoPanel
              pending={this.state.isWaitingResponse}
              error={this.state.lastRequestError} />

        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasError: state.homeReducer.hasError,
    error: state.homeReducer.error,
    isWaitingResponse: state.homeReducer.currentState === HomeStates.HOME_REQUEST,
    lastRequestError: state.homeReducer.hasError ? state.error : null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchSearchOrdersMoveAction: () =>
    dispatch(createSearchOrdersMoveAction()),
    dispatch,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);


const styles = {
  view: {
    backgroundColor: Config.secondaryColor,
    borderRadius: 4,
    padding: 4,
  }
}
