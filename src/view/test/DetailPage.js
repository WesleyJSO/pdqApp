// Detail page with a destination shared element
import React, { Component } from 'react'
import { SharedElement } from 'react-native-motion';

export default class DetailPage extends Component {
  state = {
    listItemNode:
    [
      {'item': 'text a'},
      {'item': 'text b'},
      {'item': 'text c'},
      {'item': 'text d'},
      {'item': 'text e'}
    ]
  } 
  render() {
    return (
      <SharedElement sourceId="source">
        <View>{listItemNode}</View>
      </SharedElement>
    );
  }
}
