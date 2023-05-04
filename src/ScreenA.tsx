import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type ScreenAProps = {
  navigation: any;
};

export default function ScreenA({navigation}: ScreenAProps) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0',
        })}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
