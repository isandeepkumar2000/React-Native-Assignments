import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const runList = [
  {zero: 0},
  {one: 1},
  {two: 2},
  {three: 3},
  {four: 4},
  {five: 5},
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

      <TouchableOpacity>
        <View style={styles.buttonDots}>
          <Text style={styles.buttonText}>...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonList;

const {width} = Dimensions.get('window');
const buttonSize = width * 0.12;
const marginHorizontal = (width - buttonSize * 7) / 12;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: marginHorizontal,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    marginLeft: marginHorizontal / 2,
    marginRight: marginHorizontal / 2,
  },
  buttonDots: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: marginHorizontal / 2,
    marginRight: marginHorizontal / 2,
  },
  buttonText: {
    fontSize: buttonSize * 0.4,
    fontWeight: 'bold',
  },
});
