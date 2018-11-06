import React, { PureComponent } from 'react'
import { TranslateYAndOpacity } from 'react-native-motion';
import { View } from 'react-native'

export default class ToolbarTitle extends PureComponent {
  render() {
    return (
      <TranslateYAndOpacity duration={250}>
        <View>
        </View>
      </TranslateYAndOpacity>
    );
  }
}
