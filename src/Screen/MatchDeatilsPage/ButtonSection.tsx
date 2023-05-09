import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../../utils/customButton';

const ButtonSection = () => {
  return (
    <View>
      <Text>
        <CustomButton title="Undo" color="#2f8520" />
      </Text>
      <Text>
        <CustomButton title="SwapBatsman" color="#2f8520" />
      </Text>
    </View>
  );
};

export default ButtonSection;
