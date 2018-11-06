import React from "react"
import { StyleSheet } from 'react-native'
import { Header, Title, Icon, Left, Body } from "native-base"

const _Header = props => {
  return (
    <Header style={styles.header}>
      <Left>
        <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
    </Header>
  )
}

export default _Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0d4c92',
  }
})
