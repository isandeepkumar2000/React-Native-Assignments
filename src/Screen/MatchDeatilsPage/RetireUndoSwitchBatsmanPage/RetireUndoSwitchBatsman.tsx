import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../../utils/customButton';

const ButtonSection = () => {
  return (
    <View>
      <View style={styles.textScore}>
        <Text>
          <CustomButton
            style={{
              width: 100,
              height: 40,
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
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
              width: 100,
              height: 40,
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
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
              width: 100,
              height: 40,
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
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
    marginRight: 10,
    marginBottom: 2,
    marginTop: 2,
  },
});
