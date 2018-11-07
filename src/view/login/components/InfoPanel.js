import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';
import { ActivityIndicator, StyleSheet, Alert } from 'react-native';

/**
 * Panel below the login form, for user feedback.
 * @param {*} props Object with the following fields:
 *  pending: bool - true when the login request is pending
 *  error: Object? - truthy when the least request resulted in error; in
 *    that case, this field should contain {code, message}.
 */
const InfoPanel = (props) => {
    return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
      }}
    >
      {/* Show while the user is being authenticated */}
      {props.pending && (
        <View>
          <ActivityIndicator size="small" color="#a02020" />
          <Text>Aguarde...</Text>
        </View>
      )}

      {/* Show to inform the user of an error */}
      {!props.pending &&
        props.error && (
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>
              Houve um erro ao realizar o login.
            </Text>
            <Button
              danger
              style={{ marginLeft: 15, marginRight: 15, alignSelf: 'center' }}
              onPressOut={() => {
                Alert.alert(
                  props.error.title || 'Erro desconhecido',
                  props.error.message || '[nenhuma mensagem informada]',
                  [{ text: 'Continuar' }],
                  { cancelable: false }
                );
              }}
            >
              <Text>Detalhes</Text>
            </Button>
          </View>
        )}
    </View>
  );
};

export default InfoPanel;
