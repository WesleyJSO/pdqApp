import React from 'react'
import { Button, Text } from 'native-base'

/**
 * 
 * @param margin optional prop
 * @param alignSelf number, optional prop
 * @param navigation navigator, mandatory prop
 * @param navigateTo view to redirect, mandatory prop
 * @param text button label, mandatory prop
 * @param onClick onClick event to execute actions, mandatory prop
 */
const _Button = props => {
  return (
    <Button 
      style={{
        elevation: 5,
        backgroundColor: props.backgroundColor || '#0d4c92',  
        margin: props.margin || 30, 
        alignSelf: props.alignSelf || 'center'
      }}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </Button>
  )
}

export default _Button
