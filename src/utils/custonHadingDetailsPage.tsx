import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomHeadingDetailsPage = () => {
  return (
    <View>
      <Text style={styles.text}>Sandeep v/s Pardeep</Text>
    </View>
  );
};

export default CustomHeadingDetailsPage;

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 17,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
});
