import React from 'react';
import styled from 'styled-components/native';
import {View, TextInput} from 'react-native';

export const LogoImage = styled.Image`
  width: 400px;
  height: 380px;
  margin: 20px;
`;

export const InputText = styled(TextInput)`
  width: 300px;
  border-width: 1px;
  background-color: #555;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
`;

export const ViewBody = styled(View)`
  flex: 1;
  background-color: #f0f0f0;
  align-items: center;
`;
