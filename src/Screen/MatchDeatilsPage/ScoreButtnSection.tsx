import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BUTTON_SIZE = 60; // Change this value as desired

const runList = [
  {zero: 0},
  {one: 1},
  {two: 2},
  {three: 3},
  {four: 4},
  {six: 6},
];

const ButtonList = ({onPress}: any) => {
  return (
    <View style={styles.container}>
      {runList.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(Object.values(button)[0])}
          style={styles.button}>
          <Text style={styles.buttonText}>{Object.values(button)[0]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default ButtonList;
