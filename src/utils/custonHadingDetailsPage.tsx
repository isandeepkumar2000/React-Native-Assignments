import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomHeadingDetailsPage = () => {
  const [host, setHost] = useState('');
  const [visitor, setVisitor] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('host');
        setHost(value || '');
        const value2 = await AsyncStorage.getItem('visitor');
        setVisitor(value2 || '');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={styles.text}>
        {host} v/s {visitor}
      </Text>
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
