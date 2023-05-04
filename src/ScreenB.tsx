import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type ScreenAProps = {
  navigation: any;
};

export default function ScreenB({navigation}: ScreenAProps) {
  const onPressHandler = () => {
    navigation.navigate('Screen_A');
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0',
        })}>
        <Text style={styles.text}>Go back to Screen A</Text>
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
