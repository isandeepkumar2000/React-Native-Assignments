import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CustomButton from '../../../utils/customButton';

const ButtonSection = () => {
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 0.24;
  const buttonHeight = buttonWidth * 0.4;

  return (
    <View>
      <View style={styles.textScore}>
        <Text>
          <CustomButton
            style={{
              width: buttonWidth,
              height: buttonHeight,
              fontSize: buttonHeight * 0.2,
            }}
            title="Undo"
            color="#2f8520"
          />
        </Text>
      </View>
      <View style={styles.textScore}>
        <Text>
          <CustomButton
            style={{
              width: buttonWidth,
              height: buttonHeight,
              fontSize: buttonHeight * 0.2,
            }}
            title="Switch"
            color="#2f8520"
          />
        </Text>
      </View>
      <View style={styles.textScore}>
        <Text>
          <CustomButton
            style={{
              width: buttonWidth,
              height: buttonHeight,
              fontSize: buttonHeight * 0.2,
            }}
            title="Retire"
            color="#2f8520"
          />
        </Text>
      </View>
    </View>
  );
};

export default ButtonSection;

const styles = StyleSheet.create({
  textScore: {
    marginTop: 2,
    marginRight: 5,
  },
});
