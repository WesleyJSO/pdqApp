// importing React is necessary for jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  List,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
  View,
} from 'native-base';
import { Platform, ScrollView } from 'react-native';
import { createLogoutRequestAction } from '../../../redux/actions/LoginAction';
import { LoginStates } from '../../../constants/LoginConstants';
import Config from 'react-native-config';

class HomePage extends Component {
  static navigationOptions = {
    title: 'Página Inicial',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoggingOut:
        props.login.currentState === LoginStates.LOGIN_STATE_LOGGING_OUT,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoggingOut:
        nextProps.login.currentState === LoginStates.LOGIN_STATE_LOGGING_OUT,
    });
  }

  goToAbout() {
    this.props.navigation.navigate('About' /* You can also pass props here */);
  }

  logout() {
    this.props.dispatch(createLogoutRequestAction());
  }

  render() {
    return (
      <ScrollView style={{ margin: 5 }}>
        <List>
          <ListItem icon onPress={this.goToAbout.bind(this)}>
            <Left>
              <View
                style={{
                  backgroundColor: Config.secondaryColor,
                  borderRadius: 4,
                  padding: 4,
                }}
              >
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
            {/* Weird javascript conditionals ;)
            (a && b) will evaluate to b if both are truthy */}
            {Platform.OS === 'ios' && (
              <Right>
                <Icon type="Ionicons" name="ios-arrow-forward" />
              </Right>
            )}
            {/* In iOS, links usually have a right-arrow because forward
            pages appear to the right (and you can swipe right to go back) */}
          </ListItem>
          <ListItem icon onPress={this.logout.bind(this)}>
            <Left>
              <View
                style={{
                  backgroundColor: Config.secondaryColor,
                  borderRadius: 4,
                  padding: 4,
                }}
              >
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
      </ScrollView>
    );
  }
}

const propsFromState = (state) => ({
  login: state.login,
});

const propsFromDispatch = (dispatch) => ({
  dispatch,
});

export default connect(
  propsFromState,
  propsFromDispatch
)(HomePage);
