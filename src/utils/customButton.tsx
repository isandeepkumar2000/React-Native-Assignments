import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const CustomButton = (props: any) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#e4880f'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dc9e9e' : props.color},
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 18,
    margin: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
});

export default CustomButton;
