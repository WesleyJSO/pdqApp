import React from "react"
import { StyleSheet } from 'react-native'
import { Header, Title, Icon, Left, Right, Body } from "native-base"

const _Header = props => {
  return (
    <Header style={styles.header}>
      <Left>
        {props.navigation.state.routeName!=='SearchOrdersPage' && 
        <Icon 
          type="MaterialCommunityIcons"
          name= "arrow-left" 
          onPress={() => {
            console.log(props.navigation)
            if(props.navigation.state.routeName === 'OrderDetailPage') {
              props.navigation.navigate('OrdersListPage')
            } else {
              props.navigation.goBack()
            }
          }}
        />
        }
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>
        <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
      </Right>
    </Header>
  )
}

export default _Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0d4c92',
  }
})
