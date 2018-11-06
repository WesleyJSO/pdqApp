import React from 'react'
import { Dropdown } from 'react-native-material-dropdown' // https://github.com/n4kz/react-native-material-dropdown

const _Dropdown = props => {
  return (
    <Dropdown
      style={{elevation: 5, padding: 0, margin: 0}}
      label={props.label}
      data={props.data}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  )
}

export default _Dropdown
