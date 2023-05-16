import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const MyButton = ({title, onPress}: any) => {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
      android_ripple={{color: '#e4880f'}}
      style={({pressed}) => [
        {backgroundColor: pressed ? '#dc9e9e' : '#31921d'},
        styles.button,
      ]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 18,
    padding: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    width: 'auto',
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
});

export default MyButton;
