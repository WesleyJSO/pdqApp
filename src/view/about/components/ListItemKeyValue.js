import React, { Component } from 'react';
import { Text, ListItem } from 'native-base';

/**
 * This is a simple variation on native-base's ListItem.
 * It displays a key and a value. Pass both as props {keyText, valueText}
 */
export default function(props) {
  return (
    <ListItem>
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        {props.keyText}:{' '}
      </Text>
      <Text
        style={{
          flex: 1,
          flexWrap: 'wrap',
        }}
      >
        {props.valueText}
      </Text>
    </ListItem>
  );
}
