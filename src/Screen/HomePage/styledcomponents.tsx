import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TextInput} from 'react-native';
import {Platform} from 'react-native';

export const TextStyleTeam = styled.Text`
  color: #096409;
  margin-left: 14px;
  margin-top: 10px;
`;

export const TextStyleAdvancedSettling = styled.Text`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 800;
`;

export const TextStyleBody = styled.View`
  padding: 0%;
`;

export const TextStyleInputSection = styled.View`
  ${Platform.OS === 'android'
    ? `elevation: 3;`
    : `shadow-color: #1B1F23;
       shadow-offset: {
         width: 0;
         height: 1;
       };
       shadow-opacity: 0.15;
       shadow-radius: 3;`}
  background-color: #ffffff;
  padding: 0px 10px 20px;
  margin: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const TextStyleButtonSection = styled.View`
  ${Platform.OS === 'android'
    ? `elevation: 3;`
    : `shadow-color: #1B1F23;
       shadow-offset: {
         width: 0;
         height: 0.5;
       };
       shadow-opacity: 0.15;
       shadow-radius: 3;`}
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 10px 10px 7px;
  margin: -5px 0px 0px 0px;
`;

export const TextStyleScoreSection = styled.View`
  ${Platform.OS === 'android'
    ? `elevation: 3;`
    : `shadow-color: #1B1F23;
       shadow-offset: {
         width: 0;
         height: 0.5;
       };
       shadow-opacity: 0.15;
       shadow-radius: 3;`}
  background-color: #ffffff;
  border-radius: 10px;
  margin: -5px 10px 10px 10px;
  padding: 0px 10px 20px;
`;
export const TextStyleWideSection = styled.View`
  ${Platform.OS === 'android'
    ? `elevation: 3;`
    : `shadow-color: #1B1F23;
       shadow-offset: {
         width: 0;
         height: 0.5;
       };
       shadow-opacity: 0.15;
       shadow-radius: 3;`}
  background-color: #ffffff;
  border-radius: 10px;
  margin: -5px 10px 10px 10px;
  padding: 0px 10px 20px;
`;

export const TextStyleInputSelectedPlayer = styled.View`
  padding: 0px 10px 20px;
  margin: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;

export const TextStyleRadioButton = styled.View`
  ${Platform.OS === 'android'
    ? `elevation: 3;`
    : `shadow-color: #1B1F23;
       shadow-offset: {
         width: 0;
         height: 1;
       };
       shadow-opacity: 0.15;
       shadow-radius: 3;`}
  background-color: #ffffff;
  padding: 10px 10px;
  margin: 10px;
  margin-top: 10px;
  border-radius: 10px;
`;
