import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const runList = [
  {zero: 0},
  {one: 1},
  {two: 2},
  {three: 3},
  {four: 4},
  {five: 5},
  {six: 6},
];

const ButtonList = ({onPress, onPresss}: any) => {
  return (
    <View style={styles.container}>
      {runList.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(Object.values(button)[0])}
          style={styles.button}>
          <Text style={(styles.buttonText, {fontSize: 20})}>
            {Object.values(button)[0]}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity>
        <View style={styles.buttonDots}>
          <Text style={styles.buttonText}>...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
  },

  buttonDots: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'green',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
