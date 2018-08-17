import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import Config from 'react-native-config';

import HomePage from '../view/home/containers/HomePage';
import LoginPage from '../view/login/containers/LoginPage';
import AboutPage from '../view/about/containers/AboutPage';
import { LoginStates } from '../constants/LoginConstants';

/**
 * Stack for non-authenticated users
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
    About: { screen: AboutPage },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Config.primaryColor,
      },
      headerTintColor: '#d0d0d0',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: Config.primaryColorText,
      },
    }),
    initialRouteKey: 'HomePage',
  }
);

export class Navigator extends Component {
  render() {
    let loginState = this.props.state.login.currentState;
    let userAuthenticated =
      loginState === LoginStates.LOGIN_STATE_LOGGED_IN ||
      loginState === LoginStates.LOGIN_STATE_LOGGING_OUT;
    return userAuthenticated ? <StackNavigator /> : <LoginStackNavigator />;
  }
}

const mapStateToProps = (state) => ({ state });

export default connect(
  mapStateToProps,
  null
)(Navigator);
