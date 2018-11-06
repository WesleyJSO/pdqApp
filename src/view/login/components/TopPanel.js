import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const TopPanel = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/PDQ_LOGO_TRASNPARENT.png')}
        // source={require('../../../../img/logo-example.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'contain',
  },
});

export default TopPanel;
