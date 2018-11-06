import React from 'react'
import { TextField } from 'react-native-material-textfield' // https://www.npmjs.com/package/react-native-material-textfield

const _TextField = props => {
  return (
    <TextField
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      baseColor={'rgba(0, 0, 0, 0.60)'}
    />
  )
}
export default _TextField
