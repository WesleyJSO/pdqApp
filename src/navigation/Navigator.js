import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
import Config from 'react-native-config';

import HomePage from '../view/home/containers/HomePage';
import LoginPage from '../view/login/containers/LoginPage';
import AboutPage from '../view/about/containers/AboutPage';
import OrdersListPage from '../view/ordersList/containers/OrdersListPage'
import SearchOrdersPage from '../view/searchOrders/containers/SearchOrdersPage'
import OrderDetailPage from '../view/orderDetails/containers/OrderDetailPage'
import { LoginStates } from '../constants/LoginConstants'
import { StyleSheet, Image } from 'react-native'
import { Container, Content, Header, Body, Icon } from 'native-base';
import DetailPage from '../view/test/DetailPage'
import ListPage from '../view/test/ListPage'

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: '#0d4c92' }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require("../assets/PDQ_LOGO_WHITE.jpg")} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const AppDrawerNavigator = DrawerNavigator(
  {
    // HomePage: { screen: HomePage },
    SearchOrdersPage: { screen: SearchOrdersPage },
    LoginPage: {screen: LoginPage,
      navigationOptions: {
        drawerLabel: () => 'Sair',
      }
    },
    OrdersListPage: { screen: OrdersListPage,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
    AboutPage: { screen: AboutPage,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
    DetailPage: { screen: DetailPage,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
    OrderDetailPage: { screen: OrderDetailPage,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
  },
  {
    drawerPosition: 'right',
    initialRouteName: "SearchOrdersPage",
    contentComponent: CustomDrawerContentComponent
  }
)

/**
 * Stack for non-authenticated users,
 * createStackNavigator is a function that takes a route configuration 
 * object and an options object and returns a React component.
 */
const LoginStackNavigator = createStackNavigator(
  {
    LoginPage: { screen: LoginPage },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Config.primaryColor,
      },
      headerTintColor: '#d0d0d0',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: Config.primaryColorText,
      },
      // add this line to remove the header
      // header: null,
    },
    initialRouteKey: 'LoginPage',
  }
);

/**
 * Stack for authenticated users
 */
const StackNavigator = createStackNavigator(
  {

    HomePage: { screen: HomePage },
    SearchOrdersPage: { screen: SearchOrdersPage },
    OrdersListPage: { screen: OrdersListPage },
    AboutPage: { screen: AboutPage },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: Config.primaryColor,
      },
      headerTintColor: '#d0d0d0',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: Config.primaryColorText,
      },
    },
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);

export class Navigator extends Component {
  render() {
    let loginState = this.props.state.loginReducer.currentState;
    let userAuthenticated =
      loginState === LoginStates.LOGIN_STATE_LOGGED_IN ||
      loginState === LoginStates.LOGIN_STATE_LOGGING_OUT;

    return userAuthenticated ? <AppDrawerNavigator /> : <LoginStackNavigator />;
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(
  mapStateToProps,
  null
)(Navigator);

styles = StyleSheet.create({
  drawerImage: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 100
  }
})
