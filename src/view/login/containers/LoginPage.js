import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Button, Form, Item, Input, Icon } from 'native-base';
import { ScrollView } from 'react-native';
import Config from 'react-native-config';

import { createLoginRequestAction } from '../../../redux/actions/LoginAction';
import { LoginStates } from '../../../constants/LoginConstants';

import TopPanel from '../components/TopPanel';
import _InfoPanel from '../../../components/_InfoPanel';

class LoginPage extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Icon 
        type="MaterialCommunityIcons"
        name="logout"
        style={{ fontSize: 20, color: '#0d4c92'}}
      />
    ),
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggingIn: props.isLoggingIn,
      lastLoginError: null, // don't show errors from previous uses of this page
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoggingIn: nextProps.isLoggingIn,
      lastLoginError: nextProps.lastLoginError,
    });
  }

  login() {
    this.props.dispatchLoginRequest(this.state.username, this.state.password);
  }

  render() {
    return (
      <ScrollView>
        <Form>
          <Item style={{ marginLeft: 0, marginRight: 0 }}>
            {/* Top panel containing the logo */}
            <TopPanel />
          </Item>
          <Item>
            <Input
              placeholder="Usuário"
              autoCorrect={false}
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />
          </Item>
          <Item>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </Item>
          <Button
            full
            style={{
              elevation: 5,
              backgroundColor: '#0d4c92',
            }}
            onPressOut={this.login.bind(this)}
          >
            <Text style={{ color: Config.secondaryColorText }}>Login</Text>
          </Button>
        </Form>
        {/* This panel will show a spinner and possibly an error. */}
        <_InfoPanel
          message={'Houve um erro ao realizar o login.'}
          pending={this.state.isLoggingIn}
          error={this.state.lastLoginError}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasError: state.loginReducer.hasError,
    error: state.loginReducer.error,
    isLoggingIn:
      state.loginReducer.currentState === LoginStates.LOGIN_STATE_LOGGING_IN,
    lastLoginError: state.loginReducer.hasError ? state.loginReducer.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginRequest: (username, password) =>
      dispatch(createLoginRequestAction({ username, password }))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
