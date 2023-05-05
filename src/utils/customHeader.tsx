import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
  navigation: any;
};

export default function CustomHeader({navigation}: Props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => console.log('Bell icon pressed')}>
        <Icon
          name="bell"
          size={20}
          color="white"
          style={{marginRight: 45, alignItems: 'center'}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Settings icon pressed')}>
        <Icon
          name="cog"
          size={20}
          color="white"
          style={{marginRight: 15, alignItems: 'center'}}
        />
      </TouchableOpacity>
    </View>
  );
}
