import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import CustomButton from '../../utils/customButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {InputText, LogoImage, ViewBody} from './styledcomponents';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

export interface LoginProps {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

export default function Login({navigation}: LoginProps) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      AsyncStorage.getItem('username').then(value => {
        if (value != null) {
          navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = () => {
    if (username) {
      Alert.alert('Warning!', 'Please Write Your Username');
    } else {
      navigation.navigate('Home');
      try {
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ViewBody style={styles.body}>
      <LogoImage
        source={{
          uri: 'https://img.freepik.com/free-vector/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept_1302-5492.jpg?w=826&t=st=1683264240~exp=1683264840~hmac=691db06c21b734a01641147f75b0b6f481e1923171edc884686a32e99eb81fa9',
        }}
      />

      <InputText
        placeholder="Enter your Name"
        value={username}
        onChangeText={(value: React.SetStateAction<string>) =>
          setUsername(value)
        }
      />

      <CustomButton
        title="Let's Play"
        color="#31921d"
        onPressFunction={setData}
      />
    </ViewBody>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8fcff',
  },
  logo: {
    width: 400,
    height: 380,
    margin: 20,
  },
  text: {
    fontSize: 20,
    color: '#120909',
    marginTop: 30,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
  },
});
