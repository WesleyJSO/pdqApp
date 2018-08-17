import React from 'react';
import { View, Text, ListItem, Separator } from 'native-base';
import Config from 'react-native-config';

/**
 * Variation on native-base's ListItem to be used as a header.
 * Pass it the text as props.
 */
export default function(props) {
  return (
    <View>
      <ListItem itemHeader>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black',
          }}
        >
          {props.text}
        </Text>
      </ListItem>
      <Separator
        style={{ height: 5, backgroundColor: Config.secondaryColor }}
      />
    </View>
  );
}
