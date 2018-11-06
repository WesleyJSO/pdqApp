// List items page with source of SharedElement
import React, { Component } from 'react'
import { SharedElement } from 'react-native-motion';
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'


export default class ListPage extends Component {
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
      <SharedElement  moveSharedElement="testes"  id="source" >
        <View style={styles.view}>{this.state.listItemNode.map(i => {
          return <Text key={i.item}>{i.item}</Text>
        })}</View>
      </SharedElement>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: 'center'
  }
}) 
