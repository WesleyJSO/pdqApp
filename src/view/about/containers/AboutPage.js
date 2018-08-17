import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Platform, ScrollView } from 'react-native';
import { Text, List, ListItem } from 'native-base';
import ListItemKeyValue from '../components/ListItemKeyValue';
import ListItemHeader from '../components/ListItemHeader';
import VersionNumber from 'react-native-version-number';
import DeviceInfo from 'react-native-device-info';

class AboutPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sobre',
  };

  render() {
    return (
      <ScrollView>
        <List>
          {/* Seção do aplicativo: versão do app */}
          <ListItemHeader text="Aplicativo" />
          <ListItem>
            <Text>{DeviceInfo.getApplicationName()}</Text>
          </ListItem>
          <ListItemKeyValue
            keyText="Versão do aplicativo"
            valueText={
              VersionNumber.appVersion + ' build ' + VersionNumber.buildVersion
            }
          />

          {/* Seção do usuário: informações sobre o usuário logado */}
          <ListItemHeader text="Usuário" />
          <ListItemKeyValue
            keyText="Nome de usuário"
            valueText={this.props.login.username}
          />
          <ListItemKeyValue
            keyText="Nome"
            valueText={this.props.login.userInfo.name}
          />
          <ListItemKeyValue
            keyText="E-mail"
            valueText={this.props.login.userInfo.email}
          />

          {/* Seção do dispositivo: informações do aparelho e OS */}
          <ListItemHeader text="Dispositivo" />
          <ListItemKeyValue
            keyText="Fabricante"
            valueText={DeviceInfo.getManufacturer()}
          />
          <ListItemKeyValue
            keyText="Modelo"
            valueText={DeviceInfo.getBrand() + ' ' + DeviceInfo.getModel()}
          />
          <ListItemKeyValue
            keyText="Sistema Operacional"
            valueText={
              DeviceInfo.getSystemName() +
              ' ' +
              DeviceInfo.getSystemVersion() +
              (Platform.OS === 'android'
                ? ' API ' + DeviceInfo.getAPILevel()
                : '') +
              (DeviceInfo.isEmulator() ? ' (emulador)' : '')
            }
          />
        </List>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

// We may need a mapDispatchToProps for sharing the info in this page
export default connect(
  mapStateToProps,
  null
)(AboutPage);
